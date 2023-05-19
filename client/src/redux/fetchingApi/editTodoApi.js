import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export  const EditTodoApi =  createAsyncThunk("api/EditTodo",async({id,editTodo})=>{
    const response = await axios.put(`http://localhost:5000/todos/${id}`,editTodo)
    return response.data
})


const initialState = {
    editloading : false
}

const EditTodoSlice = createSlice({
    name:"api",
    initialState:initialState,
    extraReducers:{
        [EditTodoApi.pending]:(state,action)=>{
            console.log("EditTodoApi.pending")
        },
        [EditTodoApi.fulfilled]:(state,action)=>{
            console.log("EditTodoApi.fulfilled")
            state.editloading = true
        },
        [EditTodoApi.rejected]:(state,action)=>{
            console.log("EditTodoApi.rejected",action)
            
        },
    }
})

export default EditTodoSlice.reducer