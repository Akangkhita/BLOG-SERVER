const mongoose=require("mongoose")
async function connectmongodb() {
    return mongoose.connect("mongodb://127.0.0.1:27017/article-app-1")
    
}
module.exports={connectmongodb}