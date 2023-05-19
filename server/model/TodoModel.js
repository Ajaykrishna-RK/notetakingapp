const { default: mongoose } = require("mongoose");

const TodoSchema = new mongoose.Schema({
 
  title: {
    type: String,
  },
  description:{
    type:String
  },
  user :
{type:mongoose.Schema.Types.ObjectId,
    ref:"Use"
}
});

const Todo = mongoose.model("Todo",TodoSchema)

module.exports = Todo