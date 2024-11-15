const http=require("http")
const port=3200
const data=["nodejs"]

const userDetails={u_id:258,username:"john",email:"john@123"};
const userDataArray=[userDetails,userDetails,userDetails,userDetails]

const server=http.createServer((req,res)=>{

    res.writeHead(200,{"content-type":"application/json"})
    res.write(
        JSON.stringify({statusMessage:"user details",data:userDataArray}))
    res.end()
})

server.listen(port,()=>{
    console.log("server is running")
})

// OUTPUT:
// {
//     "statusMessage": "user details",
//     "data": [
//       {
//         "u_id": 258,
//         "username": "john",
//         "email": "john@123"
//       },
//       {
//         "u_id": 258,
//         "username": "john",
//         "email": "john@123"
//       },
//       {
//         "u_id": 258,
//         "username": "john",
//         "email": "john@123"
//       },
//       {
//         "u_id": 258,
//         "username": "john",
//         "email": "john@123"
//       }
//     ]
//   }