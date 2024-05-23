import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducer/todoReducer';
import userReducer from './reducer/userReducer';
const store = configureStore({
  reducer:{
    todos:todoReducer,
    user:userReducer
  }
})

export default store;