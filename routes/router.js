const mongoose=require("mongoose")
const express=require("express")
const Post=require("../model/Post")
const router=express.Router()
router.get("/",async(req,res)=>{
    const Posts=await Post.find()
    return res.json(Posts)
})
router.use(express.urlencoded({extended:false}))
router.post("/",async(req,res)=>{
    try{
    const Postdata=req.body
    if(!req.body||!req.body.title||!req.body.content||!req.body.author){
        return res.status(404).json({msg:"fill it up with ur increadible thoughts"})
    }
    const result=await Post.create({
        title:req.body.title,
        content:req.body.content,
        author:req.body.author,
        createdat:req.body.createdat

    })
    return res.json(result)}
    catch(err){
        console.error(`error creating post:`,err)
        res.status(500).json(err)
    }
})
router.put("/:id",async(req,res)=>{
    try{
    const updated=await post.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.json(updated)}
    catch(err){
        res.status(500).json(err)
    }
})
router.delete("/:id",async(req,res)=>{
    try{
        const deleted=await Post.findByIdAndDelete(req.params.id)
        res.json(deleted)
    }
    catch(err){
        res.status(500).json(err)
    }
})
router.get("/:id",async(req,res)=>{ 
    try{
    const newpost=await Post.findById(req.params.id)
    res.json(newpost)
}
catch(err){
    res.status(500).json(err)

}

})
module.exports=router

