import logo from './logo.svg';
import './App.css';
import { useState ,useEffect} from 'react';
import { postTodo ,getTodo} from './redux/action/todoAction';
import { useDispatch ,useSelector} from 'react-redux';
import Todo from './components/Todo';
import CategorySele from './components/selection/CategorySele';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [todo,setTodo]=useState('')
  const [category,setCategory]=useState('')
  const {todos} = useSelector(state => state.todos.todos)
const[on,setOn]=useState(false) 
const [todoList,setTodoList]=useState([])
const dispatch  = useDispatch()
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
  setTodoList([...todoList,{todo:todo,category:category}])
dispatch(postTodo({task:todo,isComplete:false,category:category}))
.then(()=>{
  dispatch(getTodo());
        setTodo('');  // Clear the input after adding
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
    setTodoList(todos.filter(todo=>todo.category===category))
    setCategory('')
    
  }
 

  return (
    <div className="App">
    <div className='Todo'>
     <h1>Todo List</h1>
     <div className='formDiv'>
        <input className='formInput' value={todo} onChange={(evt)=>setTodo(evt.target.value)} type='text' placeholder='Add Todo' />
        <CategorySele  setCategory={setCategory} category={category}/>
        
        <button className='btn' onClick={addTodo}>ADD</button>

     </div>
     <div className='fieldDiv'>
     <div>
      <button onClick={allBtn} className='btn'>All</button>
      <button onClick={activeBtn} className='btn'>Active</button>
      <button onClick={doneBtn} className='btn'>Done</button>
      <button onClick={categoryBtn} className='btn'>FilterByCategory</button>
      
      
      
     </div>
     {todoList &&todoList.length>0?todoList.map((todo,index)=>(
        <Todo key={index} id={todo._id} todo={todo.task} category={todo.category} isComplete={todo.isComplete} />
     )):<h3>No Item</h3>}

     </div>
</div>
    </div>
  );
}

export default App;
