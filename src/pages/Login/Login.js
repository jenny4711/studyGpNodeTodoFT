import { useState ,useEffect} from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { login } from '../../redux/action/userAction';
import { useNavigate } from 'react-router-dom';
import './Login.css';
const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [msg,setMsg]=useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const submitHandler=(evt)=>{
    evt.preventDefault()
    
   dispatch(login({email,password},navigate))
  
  }
  return (
    <div className='Login'>
      <h1>Log In</h1>
      <form className='LogInForm' onSubmit={submitHandler}>
      <input onChange={(evt)=>setEmail(evt.target.value)} value={email} type='email' placeholder='Email' />
        <input onChange={(evt)=>setPassword(evt.target.value)} type='password' placeholder='Password' />
        <button>Submit</button>
      </form>
      
    </div>
  );
}

export default Login;
