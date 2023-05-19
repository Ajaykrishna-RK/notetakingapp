import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const loginApi = createAsyncThunk("api/loginApi", async (logincred) => {
  const response = await axios.post("http://localhost:5000/login", logincred, {
    withCredentials: true,
  });
  return response.data;
});

export const checkAuthApi = createAsyncThunk("api/checkAuthApi", async () => {
  const response = await axios.get("http://localhost:5000/checkauth", {
    withCredentials: true,
  });
  return response.data;
});


export const logOutApi = createAsyncThunk("api/logOutApi",async ()=>{
  const response = await axios.get("http://localhost:5000/logout")
  return response.data
})

const initialState = {
    checkAuthLoading : false,
  loginLoading:false,
  logundefined : false,
  userName: "",
};

const loginSlice = createSlice({
  name: "api",
  initialState: initialState,

  reducers :{
clearloginState(state){
  state.checkAuthLoading  =false;

  state.logundefined  = false;
}
  },

  extraReducers: {
    [loginApi.pending]: (state, action) => {
      state.loginLoading = false;
    },
    [loginApi.fulfilled]: (state, action) => {
      state.loginLoading = true;
      state.userName = action.payload;
      console.log(action.payload, "login");
    },
    [loginApi.rejected]: (state, action) => {
      state.loginLoading = false;
      state.logundefined = true
      console.log(action)
    },

    [checkAuthApi.pending]: (state, action) => {
      console.log("pending", "checkAuth");
    },
    [checkAuthApi.fulfilled]: (state, action) => {
      console.log(action, "check fullfilled");
     state.checkAuthLoading= true
     },
    [checkAuthApi.rejected]: (state, action) => {
      console.log(action, "rejected, check");
    },


    [logOutApi.pending] : (state,action) =>{
      console.log("pending","logout")
  },
  [logOutApi.fulfilled] : (state,action) =>{
      
      state.loginLoading = false
      console.log("fulfilled",action,"logout")
  },
  [logOutApi.rejected] : (state,action) =>{
      console.log("rejected","logout")
  }

  },
});

export default loginSlice.reducer;

export const {clearloginState} = loginSlice.actions
