import {getTodos,getTodosSuccess,getTodosFailure,postTodos} from '../reducer/todoReducer'
import api from '../api'

export const postTodo=({task,isComplete,category})=>async(dispatch)=>{
  try{
    dispatch(getTodos())
    const res = await api.post('/tasks',{task,isComplete,category})
    console.log(res.data.newTodo,'postTodoAction')
    dispatch(getTodo())
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

export const updateTodo=({id,isComplete})=>async(dispatch)=>{
  try{
dispatch(getTodos())
console.log(isComplete,'isCompleteAction')
const res = await api.put(`/tasks/${id}`,{isComplete:!isComplete})
console.log(res.data,'updateTodoAction')
dispatch(getTodo())
  }catch(error){
    dispatch(getTodosFailure(error.message))
    console.log(error,'errorAction')
  }
}

export const deleteTodo=(id)=>async(dispatch)=>{
  try{
    dispatch(getTodos())
    const res = await api.delete(`/tasks/${id}`)
    console.log(res.data,'deleteTodoAction')
    dispatch(getTodo())

  }catch(error){
    dispatch(getTodosFailure(error.message))
    console.log(error,'errorAction')
  }
}