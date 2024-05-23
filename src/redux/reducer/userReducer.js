import { createAsyncThunk,createSlice } from '@reduxjs/toolkit';

let initialState = {
    user: null,
    loading: false,
    error: ""
}

const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    successLogin:(state,action)=>{
      state.loading=false
      state.user=action.payload
    },
    failLogin:(state,action)=>{
      state.loading=false
      state.error=action.payload
    },
    allRequest:(state,action)=>{
      state.loading=true
      state.error=''

    }
    
  }
})

export const {successLogin,failLogin,allRequest}=userSlice.actions
export default userSlice.reducer