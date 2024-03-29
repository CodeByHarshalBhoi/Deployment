import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js"
import bodyParser from "body-parser"

const app = express();
const PORT = 3000;
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["POST"],
    credentials:true
}))
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/api/v1/reservation", reservationRouter)

main()
.then(()=>{
    console.log("Database Connect Successfully")
})
.catch((err)=>{
    console.log(err)
})

async function main(){
    mongoose.connect("mongodb://127.0.0.1:27017/restaurant")
}

app.use(errorMiddleware)

app.get("/", (req, res, next)=>{
   return res.status(200).json({
    success:true,
    message:"Hello World"
   })
})

app.listen(PORT, ()=>{
    console.log(`Server start on  port ${PORT}`)
})