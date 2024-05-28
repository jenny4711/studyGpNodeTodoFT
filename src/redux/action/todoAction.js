import {getTodos,getTodosSuccess,getTodosFailure,postTodos} from '../reducer/todoReducer'
import api from '../api'

export const postTodo=({task,isComplete,category,email})=>async(dispatch)=>{
  try{
    dispatch(getTodos())
    const token = sessionStorage.getItem('token');
    if (!token) throw new Error('No token found in session storage');
    const email=sessionStorage.getItem('email')

  
    const res = await api.post('/tasks',{task,isComplete,category,email})
   
 
   dispatch(postTodos(res.data))
    dispatch(getTodo())
  }catch(error){
    dispatch(getTodosFailure(error.message))
    console.log(error,'errorAction')
  }
}

export const getTodo=()=>async(dispatch)=>{
  try{
    dispatch(getTodos())
    const email=sessionStorage.getItem('email')
    const res = await api.get(`/tasks/${email}`)

   
    dispatch(getTodosSuccess(res.data))
  }catch(error){
    dispatch(getTodosFailure(error.message))
    console.log(error,'errorAction')
  }
}

export const updateTodo=({id,isComplete})=>async(dispatch)=>{
  try{
dispatch(getTodos())

const email=sessionStorage.getItem('email')
const res = await api.put(`/tasks/${id}`,{isComplete:!isComplete})

dispatch(getTodo())
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
   
    dispatch(getTodo())   

  }catch(error){
    dispatch(getTodosFailure(error.message))
    console.log(error,'errorAction')
  }
}