const {connectmongodb}=require("./views/connection")
const express=require("express")
const fs=require("fs")
const postroutes=require("./routes/router")
const app=express()
const PORT=5000

connectmongodb("mongodb://127.0.0.1:27017/article-app-1")
.then(()=>console.log("mongodb connected"))

app.use("/api/post",postroutes)
app.use(express.urlencoded({extended:false}))
app.listen(PORT,()=>console.log(`server started at port:${PORT}`))

