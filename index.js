const express=require("express")
require('dotenv').config()
const cors=require("cors")
const { connection } = require("./db")
const { boardRouter } = require("./Route/board.route")


const app=express()
app.use(cors())

app.use(express.json())

app.use("/board",boardRouter)
app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("Connected to DB")
        console.log("Port is running")
    }
    catch(err){
        console.log("Something is worng with your server connection")
    }
})