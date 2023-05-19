import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signUpApi = createAsyncThunk("api/signUpApi", async (signupcred) => {
  const response = axios.post("http://localhost:5000/signup", signupcred, {
    withCredentials: true,
  });
  return response.data;
});

const initialState = {
  Signloading: false,
};

const signupSlice = createSlice({
  name: "api",
  initialState: initialState,

reducers : {
    clearSignUpState(state){
        state.Signloading = false
    }
},

  extraReducers: {
    [signUpApi.pending]: (state, action) => {
      console.log("pending");
      state.Signloading = false;
    },
    [signUpApi.fulfilled]: (state, action) => {
      console.log("fulfilled",action);
      state.Signloading = true;
    },
    [signUpApi.rejected]: (state, action) => {
      console.log("rejected",action);
      state.Signloading = false;
    },
  },



});

export const {clearSignUpState} = signupSlice.actions

export default signupSlice.reducer


