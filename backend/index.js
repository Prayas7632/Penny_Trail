import express, { urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './database/db.js';

dotenv.config({});

const app = express()
const PORT = 8080

//middleware
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(cookieParser());
const corsOptions = {
     origin:"http://localhost:5173",
     credentials: true
}

app.use(cors(corsOptions));


app.listen(8080, ()=> {
     connectDB();
     console.log(`Server listen at port ${PORT}`)
})