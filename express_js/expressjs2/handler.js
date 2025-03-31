const adminHandler=(req,res,next)=>{
    if(req.query.user=='admin'){
        next()
    }
    else{
        res.status(401).send("unauthorized")
    }
}

const userHandler=(req,res,next)=>{
    if(req.query.user=='user'){
        next()
    }
    else{
        res.status(401).send("unauthorized")
    }
}

module.exports={userHandler,adminHandler}