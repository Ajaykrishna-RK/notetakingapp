import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchSingleTodo = createAsyncThunk("api/fetchSingleTodo",async(id)=>{
    const response = await axios.get(`http://localhost:5000/todos/${id}`)
    return response.data
})

const initialState ={
    singleTodo :{}
}

const singleTodoSlice = createSlice({
    name:"api",
    initialState:initialState,


reducers:{
removeSelectedTodo(state,action){
    state.singleTodo = {} 

}
},

    extraReducers:{
        [fetchSingleTodo.pending ] : (state,action)=>{
            console.log("fetchSingleTodo == pending")
        },
        [fetchSingleTodo.fulfilled ] : (state,action)=>{
            console.log("fetchSingleTodo == fulfilled")
            state.singleTodo = action.payload
        },
        [fetchSingleTodo.rejected ] : (state,action)=>{
            console.log("fetchSingleTodo == rejected")
            console.log(action)
        }
    }
})

export const {removeSelectedTodo} = singleTodoSlice.actions

export default singleTodoSlice.reducer 