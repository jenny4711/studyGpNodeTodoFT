import React,{useEffect,useState} from 'react';
import Form from 'react-bootstrap/Form';
import { getTodo } from '../../redux/action/todoAction';
import { useSelector ,useDispatch} from 'react-redux';
const CategorySele = () => {
  const {todos} = useSelector(state => state.todos.todos)
const dispatch=useDispatch()
  console.log('category:',todos)
useEffect(()=>{
dispatch(getTodo())
},[])
  return (
    <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      {todos?.map((todo)=>(<option value={todo.category}>{todo.category}</option>))}
    </Form.Select>
  );
}

export default CategorySele;

