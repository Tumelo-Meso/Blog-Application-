import jwt from 'jsonwebtoken';
import pool from '../mysql.js';

async function middleware(req,res,next){

    const token = req.headers['authorization'];
    
    
    if(!token){
         return res.status(401).json({ message: "Invalid token format" })
    }

    
    try {
        
        const [result] = await pool.query("SELECT * FROM blacklistedTokens WHERE blacklistToken =?",[token])

            if(result.length>0){
                return res.status(403).json({message:"Session token is invalid"})
            }
        
            jwt.verify(token,process.env.JWT_SECRET_KEY,(error,decoded)=>{
            if(error){
                return res.status(401).json({ message: "Session token is invalid" })
            }

            req.userId = decoded.id
            
            next()
        })
        
    } catch (error) {
        console.error(error)
        return res.status(500).json({message:"Internal Server Error"})
    }

   

    

}



export default middleware



