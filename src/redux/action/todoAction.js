import {getTodos,getTodosSuccess,getTodosFailure,postTodos} from '../reducer/todoReducer'
import api from '../api'

export const postTodo=({task,isComplete,category})=>async(dispatch)=>{
  try{
    dispatch(getTodos())
    const email=sessionStorage.getItem('email')
    const res = await api.post('/tasks',{task,isComplete,category,email})
    console.log(res.data.newTodo,'postTodoAction')
    dispatch(getTodo(email))
  }catch(error){
    dispatch(getTodosFailure(error.message))
    console.log(error,'errorAction')
  }
}

export const getTodo=(email)=>async(dispatch)=>{
  try{
    dispatch(getTodos())
    const res = await api.get(`/tasks/${email}`)
    console.log(res.data,'getTodoAction')
    dispatch(getTodosSuccess(res.data))
  }catch(error){
    dispatch(getTodosFailure(error.message))
    console.log(error,'errorAction')
  }
}

export const updateTodo=({id,isComplete})=>async(dispatch)=>{
  try{
dispatch(getTodos())
console.log(isComplete,'isCompleteAction')
const email=sessionStorage.getItem('email')
const res = await api.put(`/tasks/${id}`,{isComplete:!isComplete})
console.log(res.data,'updateTodoAction')
dispatch(getTodo(email))
  }catch(error){
    dispatch(getTodosFailure(error.message))
    console.log(error,'errorAction')
  }
}

export const deleteTodo=(id)=>async(dispatch)=>{
  try{
    dispatch(getTodos())
    const email=sessionStorage.getItem('email')
    const res = await api.delete(`/tasks/${id}`)
    console.log(res.data,'deleteTodoAction')
    dispatch(getTodo(email))

  }catch(error){
    dispatch(getTodosFailure(error.message))
    console.log(error,'errorAction')
  }
}