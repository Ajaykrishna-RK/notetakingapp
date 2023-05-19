import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchAllTodos = createAsyncThunk("api/fetchAllTodos",async ()=>{
    const response = await axios.get("http://localhost:5000/todos")
    return response.data
})



const initialState = {
    allTodos:[]
}


const allTodosSlice = createSlice({
    name:"api",
    initialState:initialState,

    extraReducers:{
        [fetchAllTodos.pending]:(state,action)=>{
            console.log("fetchAllTodosApi -- pending")
        },
        [fetchAllTodos.fulfilled]:(state,action)=>{
            
            state.allTodos = action.payload
            console.log("fetchAllTodosApi -- fulfilled")
        },
        [fetchAllTodos.rejected]:(state,action)=>{
            console.log("fetchAllTodosApi -- rejected",action)
            
        }
    }
})

export default allTodosSlice.reducer