import {successLogin,failLogin,allRequest} from '../reducer/userReducer'
import api from '../api'

export const register=({name,email,password},navigate)=>async(dispatch)=>{
  try{
    dispatch(allRequest())
    const res = await api.post('/users',{name,email,password})
    console.log(res.data,'registerAction')
    dispatch(successLogin(res.data.user))
    sessionStorage.setItem('token',res.data.token)
    navigate('/')
  }catch(error){
    console.log(error,'registerActionError')
dispatch(failLogin(error.message))
  }
}

export const login=({email,password})=>async(dispatch)=>{
  try{
    dispatch(allRequest())
    const res = await api.post('/users/login',{email,password})
    console.log(res.data,'loginAction')
    dispatch(successLogin(res.data.user))
    sessionStorage.setItem('token',res.data.token)
  }catch(error){
    console.log(error,'loginActionError')
    dispatch(failLogin(error.message))
  }
}

