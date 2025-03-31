

// const express=require('express');
// //Imported express
// const app=express();
// //Imported express to app




// const port =3100
// app.get("/",(req,res)=>{res.send("Hello world")});
// app.get("/hello",(req,res)=>{res.send("Welcome to hello")})

// app.get("/home",(req,res)=>{res.send("Welcome to home page")})


// app.post("/aboutus",(req,res)=>{res.send("about us page")})

// app.post("/mobilepage",(req,res)=>{res.send("welcome to mobile page")})

// app.delete("/bike",(req,res)=>{res.send("welcome to bike page")})
// app.listen(port,()=>{
//     console.log("server running")
// })



const express=require('express');
//Imported express
const app=express();
//Imported express to app


app.use((req,res,next)=>{
    if(true){
        next()

    }
    else{
        res.send("You are not allowed")
    }
})

const port =3100
app.get("/",(req,res)=>{res.send("Hello world")});
app.get("/hello",(req,res)=>{res.send("Welcome to hello")})

app.get("/home",(req,res)=>{res.send("Welcome to home page")})


app.post("/aboutus",(req,res)=>{res.send("about us page")})

app.post("/mobilepage",(req,res)=>{res.send("welcome to mobile page")})

app.delete("/bike",(req,res)=>{res.send("welcome to bike page")})
app.listen(port,()=>{
    console.log("server running")
})