const jwt = require("jsonwebtoken")
const Use = require("../model/UserModel")




const requireAuth = async (req,res,next)=>{
    try{
const token = req.cookies.Authorization
console.log(token,"token")
const decoded = jwt.verify(token,process.env.SECRET_KEY)

if(Date.now() > decoded.exp) return res.sendStatus(401)

const user = await Use.findById(decoded.sub)
if(!user) return res.sendStatus(401)

req.user = user

next()

    }catch(err){
        res.json(err)
    }
}

module.exports = {

    requireAuth
}