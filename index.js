// sample example for the extract the endpoints of link
// const http=require("http")
// const port=3100

// const server=http.createServer((req,res)=>{

//     console.log(req.url)

//     res.end()
// })
// server.listen(port,()=>{
//     console.log("server is up")
// })

// conditional statements using end points

// const http=require("http")
// const port=3100

// const server=http.createServer((req,res)=>{

//     if(req.url=="/home"){
//         res.write("Welcome to Homepage")
//         res.end()
//     }
//     else if(req.url=="/contacts"){
//         res.write("Welcome to Contacts page")
//         res.end()
//     }
//     else if(req.url=="/prices"){
//         res.write("Welcome to prices page")
//         res.end()
//     }
//     else{
//         res.write("Page is not found")
//         res.end()
//     }

// })

// server.listen(port,()=>{
//     console.log("server is up")
// })

// SHOWING OUTPUT IN THE DIFFECRENT FORMATS LIKE OBJECTS,JSON,ARRAY ETC..
// const http=require("http")
// const port=3100

// const server=http.createServer((req,res)=>{

//     if(req.url=="/home"){
//         res.writeHead(200,{"content-type":"application/json"})
//         res.write(JSON.stringify({"message":"welcome to home page"}))

//         res.end()
//     }
//     else if(req.url=="/contacts"){
//         res.writeHead(200,{"content-type":"application/json"})
//         res.write(JSON.stringify({"message":"welcome to contacts page"}))
//         res.end()
//     }
//     else if(req.url=="/prices"){
//         res.writeHead(200,{"content-type":"application/json"})
//         res.write(JSON.stringify({"message":"welcome to prices page"}))

//         res.end()
//     }
//     else{
//         res.write(JSON.stringify({"message":"page is not found"}))
//         res.end()
//     }

// })
// server.listen(port,()=>{
//     console.log("sever is up")
// })

// CALCULATING queryparms to get the end points

const http = require("http");
const port = 3100;
const url=require('url')

const server = http.createServer((req, res) => {
    

    const parsedUrl=url.parse(req.url,true)//true is convert the string into obj
    console.log(parsedUrl)
  if (parsedUrl.pathname == "/amaran") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(
      JSON.stringify({
        moviename: "amaran",
        screen: parsedUrl.query.screen,
        ticketPrice: 350*parsedUrl.query.tickects,
      })
    );

    res.end();
  } else if (parsedUrl.pathname  == "/ka") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(
      JSON.stringify({
        moviename: "ka",
        screen:parsedUrl.query.screen,
        ticketPrice: 250*(parsedUrl.query.tickects),
      })
    );
    res.end();
  } else if (parsedUrl.pathname  == "/luckybhaskar") {
    res.writeHead(200, { "content-type": "application/json" });
    res.write(
      JSON.stringify({
        moviename: "luckybhaskar",
        screen: parsedUrl.query.screen,
        ticketPrice: 250*(parsedUrl.query.tickects),
      })
    );

    res.end();
  } else {
    res.write(JSON.stringify({ message: "page is not found" }));
    res.end();
  }
});
server.listen(port, () => {
  console.log("sever is up");
});
