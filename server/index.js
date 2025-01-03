import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';


import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

Hello Thakur


dotenv.config();

const app = express();
app.use(cors());

app.use(express.json({limit:'50mb'}));
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/',async(req,res)=>{
    res.send('Heloo from DALL-E');
})
const startServer=async()=>{

    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server has started ion port https://dall-e-bvhf.onrender.com'))

    } catch(error)
    {
        console.log(error);
    }

    

}
startServer(); 