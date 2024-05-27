import { useState ,useEffect} from 'react';
import './TodoList.css';
import { postTodo ,getTodo} from '../../redux/action/todoAction';
import { useDispatch ,useSelector} from 'react-redux';
import Todo from '../../components/Todo';
import CategorySele from '../../components/selection/CategorySele';
import { useNavigate } from 'react-router-dom';
const TodoList = () => {
  const [todo,setTodo]=useState('')
  const [category,setCategory]=useState('')
  const {todos} = useSelector(state => state.todos.todos)
  console.log(todos,'todos!!!!!')
const [todoList,setTodoList]=useState([])
const[msg,setMsg]=useState('')
const token =sessionStorage.getItem('token')
const email=sessionStorage.getItem('email')
const dispatch  = useDispatch()
const navigate = useNavigate()


useEffect(()=>{
  dispatch(getTodo())

  
},[dispatch])
useEffect(()=>{
  setTodoList(todos)
},[todos])
  const addTodo=(evt)=>{
    evt.preventDefault()
    if(category ===''){
      alert('Select a category')
      return
    }
  setTodoList([...todoList,{todo:todo,category:category,isComplete:false,email:email}])
dispatch(postTodo({task:todo,isComplete:false,category:category,email:email}))
.then(()=>{
  dispatch(getTodo(email));
        setTodo('');  
        setCategory(''); 
})
    

  }

  const allBtn=()=>{
    setTodoList(todos)
   
  }
  const activeBtn=()=>{
    setTodoList(todos.filter(todo=>todo.isComplete===false))
    
  }
  const doneBtn=()=>{
    setTodoList(todos.filter(todo=>todo.isComplete===true))
    
  }
  const categoryBtn=()=>{
    if(category===''){
    setMsg('Select a category')
      return
    }
    setTodoList(todos.filter(todo=>todo.category===category))
    setCategory('')
    setMsg('')
    
  }

const logOut=()=>{
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('email')
  return navigate('/')
 
}

  return (
    <div className={!token?'defTodo':'Todo'}>
     <h1>Todo List</h1>
             {msg}
     <div className={!token?'none':'formDiv'}>
        <input className='formInput' value={todo} onChange={(evt)=>setTodo(evt.target.value)} type='text' placeholder='Add Todo' />
        <CategorySele  setCategory={setCategory} category={category}/>
        
        <button className='btn' onClick={addTodo}>ADD</button>

     </div>
     <div className={!token?'none':'fieldDiv'}>
     <div>
      <button onClick={allBtn} className='btn'>All</button>
      <button onClick={activeBtn} className='btn'>Active</button>
      <button onClick={doneBtn} className='btn'>Done</button>
      <button onClick={categoryBtn} className='btn'>FilterByCategory</button>
      <button onClick={logOut} className='btn'>LogOut</button>
      
      
      
     </div>
     {todoList &&todoList.length>0?todoList?.map((todo,index)=>(
        <Todo key={index} id={todo._id} todo={todo.task} category={todo.category} isComplete={todo.isComplete} name={todo.userId?.name}/>
     )):<h3>No Item</h3>}

     </div>
     <div className={!token?'authBtns':'none'}>
      <a href='/signup' className='authbtn'>SignUp</a>
      <a href='/login' className='authbtn'>Login</a>
     </div>
</div>
  );
}

export default TodoList;
