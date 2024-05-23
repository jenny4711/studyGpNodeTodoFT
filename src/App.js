import { useState ,useEffect} from 'react';
import './App.css';
import TodoList from './pages/TodoList/TodoList';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import {Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
 

  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<TodoList />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />} />
   
    </Routes>
    </div>
  );
}

export default App;
