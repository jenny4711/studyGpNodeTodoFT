import React,{useEffect,useState} from 'react';
import Form from 'react-bootstrap/Form';
import { getTodo } from '../../redux/action/todoAction';
import { useSelector ,useDispatch} from 'react-redux';
import './CategorySele.css'
const CategorySele = ({setCategory,category}) => {

  const categoryList =['Urgent','General','Slowly','Very Urgent','Not Urgent','Very Important',]
 

  return (
    <Form.Select value={category}  className='CategorySelect' aria-label="Default select example" onChange={(evt)=>setCategory(evt.target.value)}>
      <option >Select a Category</option>
      
      {categoryList?.map((todo)=>(<option value={todo}>{todo}</option>))}
    </Form.Select>
  );
}

export default CategorySele;

