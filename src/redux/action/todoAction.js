import {getTodos,getTodosSuccess,getTodosFailure,postTodos} from '../reducer/todoReducer'
import api from '../api'

export const postTodo=({task,isComplete,category,email})=>async(dispatch)=>{
  try{
    dispatch(getTodos())
    const email=sessionStorage.getItem('email')
    console.log(email,'email!!!!!!!!!!')
    const res = await api.post('/tasks',{task,isComplete,category,email})
   console.log(res.data,'resPostTodo!!ACtion!')
 
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

    console.log(res.data,'resGetTodo!!ACtion!')
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