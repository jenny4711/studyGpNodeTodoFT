import React,{useEffect, useState} from 'react';
import './todo.css'
import { useDispatch ,useSelector} from 'react-redux';
import { deleteTodo ,updateTodo as updateTodoAc} from '../redux/action/todoAction';
const Todo = ({index,id,todo,category,isComplete,name}) => {
  const userName = name.toUpperCase()

  const dispatch = useDispatch()

const updateTodo = () => {

  dispatch(updateTodoAc({
    id,
    isComplete:isComplete
  }))
}

  const delTodo=()=>{
dispatch(deleteTodo(id))
  }

  return (
    <div key={index} className={!isComplete?'field':'field done'}>
    <p className='todo' style={{textDecoration:isComplete?'line-through':'none'}}>{todo}</p>
   <p className='todo'>by {userName}</p>
    <div className='btns'>
    <button onClick={updateTodo} className='btn'>{isComplete?'Active':'Done'}</button>
    <button onClick={delTodo} className='btn'>Delete</button>
    </div>
  </div>
  );
}

export default Todo;
