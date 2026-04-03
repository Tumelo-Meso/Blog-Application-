import bcrypt from "bcrypt";
import express from "express";
import jwt from "jsonwebtoken";
import pool from "../src/sql.js";
import { generateOTP, passwordStrength } from "../utilities/functions.js";

const router = express.Router()

const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//Account login endpoint 
router.post("/login", async (req, res )=>{


    //Destructing the body of the request
    const { email , password } = req.body;

    //Email validation
  

    //If incoming request does not match the required input then reject the request
    if(!emailTest.test(email) || !passwordStrength(password)){

        return res.status(401).json({message:"Invalid Request"});
    }


    try {
        

        //Retrieve the user from the database 
        const [row] = await pool.query("SELECT id,password_hashed FROM users WHERE email = ? ", [email])

        //If the array returned is empty then the email with that account does not exist
        if(row.length === 0){
            return res.status(404).json({message: "Account does not exist, please register"});
        }

        //Comparing the input password with the hashed password 
        if(!bcrypt.compareSync(password, row[0].password_hashed)){
       
           return  res.status(401).json({message:"Invalid credentials please enter the correct email or password"})
                  
        }


        //Creating a session token to be sent to the front end 
        const token = jwt.sign({id:row[0].id}, process.env.JWT_SECRET_KEY,  { expiresIn: '24h'})


        //Setting the expiration date to be saved in the database
        const now = new Date();
        const expiresAt = new Date(now.getTime() + 24 * 60 * 60 * 1000);


        const [result] = await pool.query("INSERT INTO sessionTokens (email,sessionToken,expiresAt) VALUES(?,?,?)",[email,token,expiresAt])

        //If we fail to insert into the database then the session should be deemed invalid
        if(result.affectedRows==0){
            return res.status(401).json({message:"Unable to validate login session"})
        }


        const [result_2] = await pool.query("UPDATE users SET latest_login =? WHERE email =?",[now,email]) 

        if(result_2.affectedRows==0){
            return res.status(401).json({message:"Unable to update lastest login session"})
        }
        res.status(200).json({token})

    } catch (error) {
        
        console.log(error)

        return res.status(500).json({message:"Internal Server Error"})
    }

    
})

//Account registration endpoint
router.post("/register", async(req,res)=>{

    const {email , username , age, gender, phone_number, password, confirm_password } = req.body;

    const gendeOptions = ["Male", "Female", "Prefer Not To Say"];
    

    if(!emailTest.test(email) || !username || age<16  || !phone_number || !gendeOptions.includes(gender)){
        return res.status(401).json({message: "Invalid Request"})
    }

    else if (password!=confirm_password){
        return res.status(401).json({message:"Password entries do not match"})
    }

    try {
        const hashedPassword = bcrypt.hashSync(confirm_password,8)
        const [result] = await pool.query("INSERT INTO users(email,username, gender,phone_number,password_hashed) VALUES(?,?,?,?,?)", [email,username,gender,phone_number,hashedPassword])


        if(result.affectedRows===0){
            return res.status(401).json({message:"Could not register account"})
        }   

        //Creating a session token to be sent to the front end 
        const token = jwt.sign({id:result.insertId}, process.env.JWT_SECRET_KEY,  { expiresIn: '24h'})


        //Setting the expiration date to be saved in the database
        const now = new Date();
        const expiresAt = new Date(now.getTime() + 24 * 60 * 60 * 1000);


        const [result_2] = await pool.query("INSERT INTO sessionTokens (email,sessionToken,expiresAt) VALUES(?,?,?)",[email,token,expiresAt])

        //If we fail to insert into the database then the session should be deemed invalid
        if(result_2.affectedRows==0){
            return res.status(401).json({message:"Unable to validate login sesssion"})
        }

        //Send an email
        res.status(200).json({token})

    } catch (error) {

        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(401).json({
                message: 'Email account already exists, please login using credentials'
            })
        }

 
        console.log(error)

        return res.status(500).json({message:"Internal Server Error"})
        
    }


})

//Email verification endpoint
router.post("/email-verification", async (req, res)=>{

    const {email} = req.body;
    const {requestType} = req.query;

    const requestTypes = ["register-email", "forgot-email"];

    if(!emailTest.test(email) || !requestTypes.includes(requestType)){

        return res.status(401).json({message:"Invalid request"})
    }


    try {
        
        const [row] = await pool.query("SELECT * FROM users WHERE email =? ", [email]);

        if(row.length===0 && requestType==="forgot-email"){

            return res.status(401).json({message:"Email account does not exist"});
        }

        if(row.length>0  && requestType ==="register-email"){
            return res.status(401).json({message:"Email account already exists, please login"})
        }

        const OTP = generateOTP();

        res.status(200).json({message:"OTP has been sent to your email"})


    } catch (error) {
        
         
        console.log(error)

        return res.status(500).json({message:"Internal Server Error"})
    }

})


//Reset password endpoint
router.post("/reset-password",async (req,res)=>{

    const {email, new_password , confirm_password} = req.body;


    if(!emailTest.test(email)){
        return res.status(401).json({message:"Invalid request"})
    }
    else if(!passwordStrength(new_password) || !passwordStrength(confirm_password)){

        return res.status(401).json({message:"Password entry is weak"});
    }
    else if (new_password !== confirm_password){
        return res.status(401).json({message:"Password entries do not match"});

    }


    try {
        
        const hashedPassword = bcrypt.hashSync(confirm_password,8);
        const [result] = await pool.query("UPDATE users SET password_hashed=?",hashedPassword);

        if(result.affectedRows===0){
            return res.status(401).json({message:"Could not reset password"})
        }


        //Send an email
        res.status(200).json({message:"Account successfully reset "})

    } catch (error) {
        
        console.log(error)

        return res.status(500).json({message:"Internal Server Error"})
    }

})

//OTP verification endpoint
router.post("otp-verification", async(req,res)=>{

    const {email,OTP} = req.body;

    if(!emailTest.test(email) || !OTP){

        return res.status(401).json({message:"Invalid request"})
    }

    try {
        
        const [row] = await pool.query("SELECT otp_hashed FROM otp_codes WHERE email=? LIMIT 1 ORDER BY date_created DESC");

        if(row.length==0){
            return res.status(401).json({message:"No valid OTP for this email"})
        }

        if(!bcrypt.compareSync(OTP, row[0].otp_hashed)){

            return res.status(401).json({message:"Invalid OTP code"})
        }


        const [result] = await pool.query("DELETE FROM otp-codes WHERE email =? ",[email]);

        if(result.affectedRows===0){
            return res.status(401).json({message:"Could not delete otp code"})
        }

        return res.status(200).json({message:"OTP verification successful"})

    } catch (error) {
        console.error(error)
        
        return res.status(500).json({message:"Internal Server Error"})
    }

})



export default router 