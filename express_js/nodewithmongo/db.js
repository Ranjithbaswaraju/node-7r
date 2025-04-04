const {mongoose}=require('mongoose');
const dotenv=require('dotenv');
dotenv.config()


function dbConnect(){
    mongoose.connect("mongodb://localhost:27017/facebook").then(()=>{
        console.log("connected to mongodb")
    }).catch((err)=>{
        console.log(err)
    })
}
module.exports={dbConnect}


