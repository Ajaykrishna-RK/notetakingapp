import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";



export const postTodo = createAsyncThunk("api/postTodo",async(createtodo)=>{
    const response = await axios.post("http://localhost:5000/todos/",createtodo)
    return response.data
})





const initialState = {
    loading : false
}

const postTodoSlice = createSlice({
    name:"api",
    initialState:initialState,
    extraReducers:{
        [postTodo.pending] :(state,action)=>{
            console.log("postTodo == pending")
        },
        [postTodo.fulfilled] :(state,action)=>{
            console.log("postTodo == fullfilled")
            state.loading = true
        },
        [postTodo.rejected] :(state,action)=>{
            console.log(action,"postTodo == rejected")
            state.loading = false

        }
    }

})

export default postTodoSlice.reducer