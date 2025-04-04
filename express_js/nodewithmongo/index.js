//mongodb setup

//monog db server installation
//mongo compass
//monogdb sehll

const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT||7700;
const { dbConnect } = require("./db.js");
const  {mongoose}  = require("mongoose");
dbConnect();

const postSchema=new mongoose.Schema({},{ strict: true })

const Post=mongoose.model("Post",postSchema)
// console.log(post)

const usersSchema=new mongoose.Schema({},{ strict: true })

const Users=mongoose.model("user",usersSchema)

app.get("/post",async(req,res)=>{
    try{
        const post = await Post.find();
        console.log(post)
        res.json(post)
    }
    catch(err){
        res.status(500).json({message:"error fetching data"})
    }
})

app.get("/user",async(req,res)=>{
    try{
        const user=await Users.find();
        console.log(user)
        res.json(user)
    }
    catch(err){
        res.status(500).json({message:"error fetching data"})
    }
})

app.listen(4000,() => {
  console.log("server running up");
});

