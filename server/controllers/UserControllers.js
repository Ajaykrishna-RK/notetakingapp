const Use = require("../model/UserModel")
const bcrypt = require("bcrypt")
const jwt  = require("jsonwebtoken")

const signUpUser = async (req,res)=>{

    try{
        const {name,email,password} = req.body
        const hashPassword = bcrypt.hashSync(password, 8);
        const user = await Use.create({
            name,
            email,
            password:hashPassword
        })
        res.json(user)
    }catch(err){
        console.log(err)
    }
}



const loginUser = async (req,res)=>{
    try{
        const {email,password} = req.body
        const user = await Use.findOne({email})
        if(!user) return res.sendStatus(401)

        const comparePass = bcrypt.compareSync(password,user.password);
        if(!comparePass) return res.sendStatus(401)

       const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;

       const token = jwt.sign({sub:user._id,exp:exp},process.env.SECRET_KEY)

      res.cookie("Authorization",token,{
        expires: new Date(exp),
        httpOnly:true,
        sameSite:"lax",
        secure: process.env.NODE_ENV === "production"
      })

   res.json(user.name)
    }catch(err){
        console.log(err)
    }
}

const checkAuth = async (req,res)=>{
  
        res.sendStatus(200)
   
}

const logout =  async (req,res)=>{
    try{
        res.clearCookie("Authorization")
        res.sendStatus(200)
    }catch(err){
        console.log(err)
    }
}




module.exports = {
    signUpUser,
    loginUser,
    checkAuth,
    logout
}