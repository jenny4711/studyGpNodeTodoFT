import { useState ,useEffect} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { register } from '../../redux/action/userAction';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
const SignUp = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const [token,setToken]=useState(sessionStorage.getItem('token'))
 
  
  const [msg,setMsg]=useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {error,loading,user} = useSelector(state => state.user)



  useEffect(()=>{
    setMsg(error)
    
  },[error])

  const submitHandler=(evt)=>{
    evt.preventDefault()
    
    if(password !== confirmPassword){
      setMsg('Password do not match')
      return
    }
    if(email ==="" || password ==="" || name ===""){
      setMsg('All fields are required')
      return
    }
    setMsg('')
   dispatch(register({name,email,password},navigate))

  
   
  }



  return (
    <div className='signUp'>
      <h1>Sign Up</h1>
      <p>{msg}</p>
      <form className='signUpForm' onSubmit={submitHandler}>
        
        <input onChange={(evt)=>setName(evt.target.value)} value={name} type='text' placeholder='Name' />
        <input onChange={(evt)=>setEmail(evt.target.value)} value={email} type='email' placeholder='Email' />
        <input onChange={(evt)=>setPassword(evt.target.value)} type='password' placeholder='Password' />
        <input onChange={(evt)=>setConfirmPassword(evt.target.value)}  type='password' placeholder='Confirm Password' />
        
        <button>Sign Up</button>
        
       
      </form>
      <div className='aTagDiv'>
        <p className='pTag'>Already have an account?</p>
        <a className='aTag' href='/login'>Login</a>
        </div>
    </div>
  );
}

export default SignUp;
