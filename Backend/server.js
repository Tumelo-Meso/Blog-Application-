import express from "express"
import dotenv from "dotenv"
import cors from "cors";


dotenv.config();

/*Creating the app using express

    Express is used to handle HTTP requests and handles
*/
const app = express();

//Local PORT where is the server is hosted
const PORT = process.env.PORT || 5000;


//Allow json format for the requests sent
app.use(express.json());

/*Allow requests from all origins

    Will be changed later to allow requests only from the mobile app origin
*/
app.use(cors()); 


//Base endpoint of the server
app.get("/", (req,res)=>{

        //If the connection is successful a message and status will be sent back to the frontend
        res.status(200).json({message:"Successfully connected to the server"})
})



//Setting the server to listen to requests from the frontend
app.listen(PORT, ()=>{

        console.log(`Server started at PORT ${PORT}`)
})