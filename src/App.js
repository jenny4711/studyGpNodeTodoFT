import { useState ,useEffect} from 'react';
import { getUser } from './redux/action/userAction';
import { useDispatch } from 'react-redux';
import './App.css';
import TodoList from './pages/TodoList/TodoList';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import {Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import PrivateRoute from './route/PrivateRoute';
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(getUser())
  },[])
 

  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<TodoList />} />
     
      <Route path='/signup' element={
     <PrivateRoute>
      <SignUp />
      </PrivateRoute>
      
      
      } />
      <Route path='/login' element={
      <PrivateRoute>

      <Login />
      </PrivateRoute> 
      
      } />
     
   
    </Routes>
    </div>
  );
}

export default App;
