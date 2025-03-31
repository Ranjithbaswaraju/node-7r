const port=3100;
const express=require('express');
const app=express();

app.get("/home",(req,res)=>{
    res.send({"name":"john","city":"cherial"})
})

app.get("/contacts",(req,res)=>{
    res.send({"name":"ranjith","phone":"991235161"})
})

app.get("/ab?c",(req,res)=>{res.send("Hello world")})

app.get("/ab+c",(req,res)=>{res.send('bye')})

app.get(/.script$/,(req,res)=>{
    console.log(req.query)

    let name=req.query.name;
    let city=req.query.city
    res.send({"name":name,"greeting":`hello ${name}`,"city":city})
})
app.get("ab*c",(req,res)=>{res.send("Welcome")})
app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})