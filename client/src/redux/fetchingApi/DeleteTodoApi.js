import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"



export const deleteTodo = createAsyncThunk("api/deleteTodo",async (id)=>{
    const response = await axios.delete(`http://localhost:5000/todos/${id}`)
    return response.data
})

const initialState = {
    deleteLoading:false
}

const DeleteTodoSlice = createSlice({
    name:"api",
    initialState:initialState,
    extraReducers:{
        [deleteTodo.pending]:(state,action)=>{
            console.log("deleteTodo.pending")
        },
        [deleteTodo.fulfilled]:(state,action)=>{
            console.log("deleteTodo.fulfilled")
            state.deleteLoading = true
        },
        [deleteTodo.rejected]:(state,action)=>{
            console.log("deleteTodo.rejected",action)
            
        },
    }
})

export default  DeleteTodoSlice.reducer
