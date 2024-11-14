// require('./file1')
// require('./file2')
// require('./file3')
// console.log("hello world11")
// common js modules
//  var imp=require('./file1')
//  console.log(imp)
//  console.log(imp.a,imp.b)


// importing through destructrinbg
// const {a,b,c}=require("./file1")
// console.log(a,b,c)

// ES6 modules

// import {a,b} from './file1.js'
// console.log(a,b)

// importing functions in node js
// const {a,b,c,sample}=require("./file1")
// sample()


// server creation

const http=require("http");
const port=3100
const server=http.createServer((req,res)=>{

    res.write("Welcome to node");
    res.end("hello")
})

server.listen(port,()=>{
    console.log(`server is running at ${port}`)
})