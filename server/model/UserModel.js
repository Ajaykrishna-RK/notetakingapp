const { default: mongoose } = require("mongoose");



const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
type:String,
required:true
    },
    todos :[
        {type:mongoose.Schema.Types.ObjectId,
          ref:"Todo"
        }
      ]
})

const Use = mongoose.model("Use",userSchema)

module.exports = Use