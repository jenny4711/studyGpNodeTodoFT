import {getTodos,getTodosSuccess,getTodosFailure,postTodos} from '../reducer/todoReducer'
import api from '../api'

export const postTodo=({task,isComplete,category})=>async(dispatch)=>{
  try{
    dispatch(getTodos())
    const res = await api.post('/tasks',{task,isComplete,category})
    console.log(res.data.newTodo,'postTodoAction')

  }catch(error){
    dispatch(getTodosFailure(error.message))
    console.log(error,'errorAction')
  }
}

export const getTodo=()=>async(dispatch)=>{
  try{
    dispatch(getTodos())
    const res = await api.get('/tasks')
    console.log(res.data,'getTodoAction')
    dispatch(getTodosSuccess(res.data))
  }catch(error){
    dispatch(getTodosFailure(error.message))
    console.log(error,'errorAction')
  }
}