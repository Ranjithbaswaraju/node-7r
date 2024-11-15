

const http=require('http')
const port=3200

const server=http.createServer((req,res)=>{
    
    // res.writeHead(200,{"content-type":"text/html"})
    // res.writeHead(200,{"content-type":"text/xml"})
    res.writeHead(404,{"content-type":"application/json"})
    res.write("Hello")
    res.end()
})

// server.listen(port,()=>{
//     console.log(`server is runnning at ${port}`)
// })

//To convet the in data form of different data types:

// const http=require('http')
// const port=3200
// const data=["nodejs"]
// const server=http.createServer((req,res)=>{
    

//     res.writeHead(200,{"content-type":"application/json"})
//     res.write(JSON.stringify(data))
//     res.end()
// })

// server.listen(port,()=>{
//     console.log("server is running")
// })
//["nodejs"]

//{data:["nodejs"]}

// const http=require("http")
// const port=3200
// const data=["nodejs"]

// const server=http.createServer((req,res)=>{

//     res.writeHead(200,{"content-type":"application/json"})
//     res.write(
//         JSON.stringify({statusMessage:"data retrived succesfully",data:data}))
//     res.end()
// })

// server.listen(port,()=>{
//     console.log("server is running")
// })


// const http=require("http")
// const port=3200
// const data=["nodejs"]

// const userDetails={u_id:258,username:"john",email:"john@123"};


// const server=http.createServer((req,res)=>{

//     res.writeHead(200,{"content-type":"application/json"})
//     res.write(
//         JSON.stringify({statusMessage:"user details",data:userDetails}))
//     res.end()
// })

// server.listen(port,()=>{
//     console.log("server is running")
// })


