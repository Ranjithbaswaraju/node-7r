
const express=require("express")
const app=express();
const port=9999
const{userHandler,adminHandler}=require("./handler.js")

app.get("/home",(req,res)=>{
    res.send("Welcome to home page")
})

app.get("/admin/home",adminHandler,(req,res)=>{
    res.send("Welcome to admin home page")
})

app.get("/admin/contact",adminHandler,(req,res)=>{
    res.send("Welcome admin to contact page")
})
app.get("/admin/products",adminHandler,(req,res)=>{
    res.send("Welcome admin to products page")
})

app.get("/user/home",userHandler,(req,res)=>{
    res.send("Welcome to user home page")
})

app.get("/user/contact",userHandler,(req,res)=>{
    res.send("Welcome user to contact page")
})

app.get("/user/products",userHandler,(req,res)=>{
    res.send("Welcome user to products page")
})
app.listen(port,()=>{
    console.log(`server running at port ${port}`)
})