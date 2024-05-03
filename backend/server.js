import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';

//Load Configuration
dotenv.config()


//application
const app = express();

//router routes
import authRoutes from './routes/auth.js'
import mainRoutes from './routes/main.js'



//midleware
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors());
if (process.env.NODE_ENV == 'dev'){
    app.use(cors({origin: process.env.CLIENT_URL}));
}


//db
mongoose.connect(process.env.DATABASE).then(console.log("connected to mongo")).catch((err)=>console.log(err));

//routes
app.use('/api/auth', authRoutes)
app.use('/api/main', mainRoutes)



app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
});