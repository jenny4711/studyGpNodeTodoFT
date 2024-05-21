import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


let initialState={
  todos:[],
  loading:false,
  error:null
}

const todoSlice = createSlice({
  name:'todo',
  initialState,
  reducers:{
    getTodos:(state)=>{
      state.loading=true
    },
    getTodosSuccess:(state,action)=>{
      state.loading=false
      state.todos=action.payload
    },
    getTodosFailure:(state,action)=>{
      state.loading=false
      state.error=action.payload
    },
    postTodos:(state,action)=>{
      state.loading=false
      state.todos=action.payload
    }
  }
})

export const {getTodos,getTodosSuccess,getTodosFailure,postTodos}=todoSlice.actions
export default todoSlice.reducer