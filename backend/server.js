import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongoDB.js';


// App config
const app = express();
const port = process.env.PORT || 8000;
connectDB();


// Middlewares
app.use(express.json());
app.use(cors());


// Api endpoints
app.get('/' , (req , res)=> { 
    res.send("API working");
})



app.listen(port , () => console.log(`Server Started at PORT: ${port}`));