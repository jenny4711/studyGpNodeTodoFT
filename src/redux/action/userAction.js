import {successLogin,failLogin,allRequest} from '../reducer/userReducer'
import api from '../api'

export const register=({name,email,password},navigate)=>async(dispatch)=>{
  try{
    dispatch(allRequest())
    const res = await api.post('/users',{name,email,password})
  
    dispatch(successLogin(res.data.user))
   
    sessionStorage.setItem('token',res.data.token)
    sessionStorage.setItem('email',res.data.user.email)
    sessionStorage.setItem('id',res.data.user._id)
    navigate('/')
  }catch(error){
    console.log(error,'registerActionError')
dispatch(failLogin(error.message))
  }
}

export const getUser=()=>async(dispatch)=>{
  try{
    const storedToken = sessionStorage.getItem('token');
    if(storedToken){
      const res = await api.get('/users/me')
      dispatch(successLogin(res.data.user))
     
    }
   
  }catch(error){
    console.log(error.message,'getUserActionError')
  }
}

export const login=({email,password},navigate)=>async(dispatch)=>{
  try{
    dispatch(allRequest())
    const res = await api.post('/users/login',{email,password})
   
    dispatch(successLogin(res.data.user))
   
    sessionStorage.setItem('token',res.data.token)
    sessionStorage.setItem('email',res.data.user.email)
  
    navigate('/')
  }catch(error){
    console.log(error,'loginActionError')

    dispatch(failLogin(error.message))
  }
}

