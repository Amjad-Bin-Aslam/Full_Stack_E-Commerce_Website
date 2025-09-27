import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import connectDB from './config/mongoDB.js';
import userRouter from './routes/userRoute.js';
import connectCloudinary from './config/cloudinary.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';



// App config
const app = express();
const port = process.env.PORT || 8000;
connectDB();
connectCloudinary();


// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());



// Api endpoints
app.get('/' , (req , res)=> res.send("API working"));
app.use('/api/user' , userRouter);
app.use('/api/product' , productRouter);
app.use('/api/cart' , cartRouter)
app.use('/api/order' , orderRouter)



app.listen(port , () => console.log(`Server Started at PORT: ${port}`));