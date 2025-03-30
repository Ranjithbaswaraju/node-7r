const http=require("http")
const port=3100
const{books}=require("./books1.js")

const server=http.createServer((req,res)=>{
    const path=req.url

    console.log(path)
   
       
    let pathArray=path.split("/")
    
    let id=pathArray[1]
    console.log(id)

    const data=books.find((x)=>(x.id==id))
    console.log(data)

    if(data){
        res.writeHead(200,'content-type:application/json');
        res.write(JSON.stringify(data));
    }else{
        res.writeHead(404,'content-type:application/json');
        res.write("book not found")

        
    }

    res.end()
})

server.listen(port,()=>{
    console.log("server is up")
})


 