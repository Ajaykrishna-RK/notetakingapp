import { configureStore } from "@reduxjs/toolkit";
import allTodoReducer from "./fetchingApi/fetchAlltodosApi"
import singleTodoReducer from "./fetchingApi/fetchSingleTodoApi"
import postTodoReducer from "./fetchingApi/postTodoApi"
import editTodoReducer from "./fetchingApi/editTodoApi"
import deleteTodoReducer  from "./fetchingApi/DeleteTodoApi"
import loginReducer from "./auth/loginSlice"
import signupReducer from "./auth/signSlice"

 
export const store = configureStore({
    reducer:{
        Todos: allTodoReducer,
        Todo: singleTodoReducer,
        postTodo:postTodoReducer,
        edittodos:editTodoReducer,
        deletetodo:deleteTodoReducer,

        // login

        login:loginReducer,
        signUp : signupReducer,
    
    }
})