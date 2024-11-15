const http=require('http')
const port=3200
const url=require("url")

const server=http.createServer((req,res)=>{

    const parsedUrl=url.parse(req.url,true)
    console.log(parsedUrl)

    if(parsedUrl.pathname=="/nonveg"){
        if(parsedUrl.query.item=="chicken"){
            res.write(`The ${parsedUrl.query.item} price is ${parsedUrl.query.quantity*250}`)
            res.write(`The GST is :${(parsedUrl.query.quantity*250)*(5/100)}`)
            res.write(`The total price of ${parsedUrl.query.item} is :${(parsedUrl.query.quantity*250)+(parsedUrl.query.quantity*250)*(5/100)}`)
            res.end()
        }
        else if(parsedUrl.query.item=="mutton"){
            res.write(`The ${parsedUrl.query.item} price is ${parsedUrl.query.quantity*350}`)
            res.write(`The GST is: ${(parsedUrl.query.quantity*350)*(5/100)}`)
            res.write(`The total price of ${parsedUrl.query.item} is :${(parsedUrl.query.quantity*350)+(parsedUrl.query.quantity*350)*(5/100)}`)
            res.end()
        }
        else if(parsedUrl.query.item=="fish"){
            res.write(`The ${parsedUrl.query.item} price is ${parsedUrl.query.quantity*450}`)
            res.write(`The GST is: ${(parsedUrl.query.quantity*450)*(5/100)}`)
            res.write(`The total price of ${parsedUrl.query.item} is :${(parsedUrl.query.quantity*450)+(parsedUrl.query.quantity*350)*(5/100)}`)
            res.end()
        }
        else{
            res.write("The mentioned item is niot available")
            res.end()
        }
    }
    else if(parsedUrl.pathname="/veg"){
        if(parsedUrl.query.item=="panner"){
            res.write(`The ${parsedUrl.query.item} price is ${parsedUrl.query.quantity*150}`)
            res.write(`The GST is :${(parsedUrl.query.quantity*150)*(5/100)}`)
            res.write(`The total price of ${parsedUrl.query.item} is :${(parsedUrl.query.quantity*150)+(parsedUrl.query.quantity*150)*(5/100)}`)
            res.end()
        }

        else if(parsedUrl.query.item=="gobhi"){
            res.write(`The ${parsedUrl.query.item} price is ${parsedUrl.query.quantity*130}`)
            res.write(`The GST is :${(parsedUrl.query.quantity*130)*(5/100)}`)
            res.write(`The total price of ${parsedUrl.query.item} is :${(parsedUrl.query.quantity*130)+(parsedUrl.query.quantity*130)*(5/100)}`)
            res.end()
        }
        else if(parsedUrl.query.item=="mushroom"){
            res.write(`The ${parsedUrl.query.item} price is ${parsedUrl.query.quantity*230}`)
            res.write(`The GST is :${(parsedUrl.query.quantity*230)*(5/100)}`)
            res.write(`The total price of ${parsedUrl.query.item} is :${(parsedUrl.query.quantity*230)+(parsedUrl.query.quantity*230)*(5/100)}`)
            res.end()
        }
        else{
            res.write(`The mentioned item is not available`)
            res.end()
        }
    }
    
})
server.listen(port,()=>{
    console.log(`server is running at ${port}`)
})
