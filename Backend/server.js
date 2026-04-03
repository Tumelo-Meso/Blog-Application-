import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import middleware from "./middleware/middleware.js";
import authenticationRoutes from "./routes/authenticationRoutes.js";
dotenv.config();

/*Creating the app using express

    Express is used to handle HTTP requests and handles
*/
const app = express();

//Local PORT where is the server is hosted
const PORT = process.env.PORT || 9020;


//Allow json format for the requests sent
app.use(express.json());

/*Allow requests from all origins

    Will be changed later to allow requests only from the mobile app origin
*/
app.use(cors()); 


//Home page endpoint
app.get("/",middleware, (req,res)=>{

    const userId = req.userId;

    
    if(!userId){
        return res.status(401).json({message:"Invalid request"})
    }


})


//User account endpoint
app.get("/account",middleware, (req,res)=>{

    const userId = req.userId;

    if(!userId){
        return res.status(401).json({message:"Invalid request"})
    }
})




app.use("/authentication", authenticationRoutes);


//Setting the server to listen to requests from the frontend
app.listen(PORT, "0.0.0.0",()=>{

        console.log(`Server started at PORT ${PORT}`)
})