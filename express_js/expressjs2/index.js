
const express=require("express")
const app=express();
const port=9999

app.use("/admin",(req,res,next)=>{
    if(req.query.user==="admin"){
        next()
    }
    else{
        res.status(401).send("unautherized access")
    }
})

app.use("/user",(req,res,next)=>{
    if(req.query.user=='user'){
        next()
    }
    else{
        res.status(401).send("unautherized access")
    }
})
app.get("/home",(req,res)=>{
    res.send("Welcome to home page")
})

app.get("/admin/home",(req,res)=>{
    res.send("Welcome to admin home page")
})

app.get("/admin/contact",(req,res)=>{
    res.send("Welcome admin to contact page")
})
app.get("/admin/products",(req,res)=>{
    res.send("Welcome admin to products page")
})

app.get("/user/home",(req,res)=>{
    res.send("Welcome to user home page")
})

app.get("/user/contact",(req,res)=>{
    res.send("Welcome user to contact page")
})

app.get("/user/products",(req,res)=>{
    res.send("Welcome user to products page")
})
app.listen(port,()=>{
    console.log(`server running at port ${port}`)
})