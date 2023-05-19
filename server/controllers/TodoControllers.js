const Todo = require("../model/TodoModel");

const getTodos = async (req, res) => {
 try{
    const todos = await Todo.find({user:req.user._id})
return res.json(todos)
 }catch(err){
    console.log(err)
 }
};

const PostTodos = async (req, res) => {
  const { title, description } = req.body;
  try {
    const todo = await Todo.create({
      title,
      description,
      user:req.user._id
    });
    return res.json(todo)
  } catch (err) {
    console.log(err);
  }
};


const getById = async (req,res)=>{
    const {id} =  req.params

    try{
        const TodoById = await Todo.findById(id)
        return res.json(TodoById)
    }catch(err){
        console.log(err)
    }
}

const updateTodo = async (req,res)=>{
    const {id} = req.params
    const {title,description} = req.body

    try{

const update = await Todo.findByIdAndUpdate(id,{
    title,
    description
})
const updatedTodo  =  await Todo.findById(id)
return res.json(updatedTodo)

    }catch(err){
        console.log(err)
    }
} 


const deleteTodo = async (req,res)=>{
    const {id} = req.params

try{
    const deleteTodo = await Todo.findByIdAndDelete(id)
    res.json(deleteTodo)
}
catch(err){
    console.log(err)
}

}


module.exports = {
  getTodos,
  PostTodos,
 getById,
 updateTodo,
 deleteTodo
};
