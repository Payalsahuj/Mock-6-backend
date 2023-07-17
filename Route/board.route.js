const express=require("express")
const boardRouter=express.Router()

boardRouter.post("/addboard",async(req,res)=>{
    let data=req.body
    try{
        let boarddata=new boardModel(data)
        await boarddata.save()
        res.status(200).json({msg:"New task has been added"})
    }catch(err){
        res.status(400).json({err:err.message})
    }
})

boardRouter.get("/",async(req,res)=>{
    let data=req.query
    try{
       let boarddata=await boardModel.find(data)
        res.status(200).json({msg:"Get",data:boarddata})
    }catch(err){
        res.status(400).json({err:err.message})
    }
})

module.exports={
    boardRouter
}