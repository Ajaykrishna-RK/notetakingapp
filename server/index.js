const express = require("express");
const { getTodos, PostTodos, getById, updateTodo, deleteTodo } = require("./controllers/TodoControllers");
const dbCOnnection = require("./config/dbConnection");

const app = express();
const cors = require("cors");
const { signUpUser, loginUser, checkAuth, logout } = require("./controllers/UserControllers");
const cookieparser = require("cookie-parser");
const { requireAuth } = require("./middleware/requireAuth");
require("dotenv").config();

dbCOnnection()
app.use(express.json())
app.use(cors({
    origin:true,
    credentials:true
  }));
app.use(cookieparser())

app.post("/signup",signUpUser);
app.post("/login",loginUser)  
app.get("/checkauth",requireAuth,checkAuth)
app.get("/logout",requireAuth,logout )
app.get("/todos",requireAuth,getTodos);
app.get("/todos/:id",requireAuth,getById)
app.post("/todos",requireAuth,PostTodos),
app.put("/todos/:id",requireAuth,updateTodo)
app.delete("/todos/:id",requireAuth,deleteTodo)

app.listen(process.env.PORT);
