import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { postTodo } from './redux/action/todoAction';
import { useDispatch ,useSelector} from 'react-redux';
import CategorySele from './components/selection/CategorySele';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [todo,setTodo]=useState('')
  const [category,setCategory]=useState('')
  const {todos} = useSelector(state => state.todos.todos)
  console.log(todos,'todosApp')
const [todoList,setTodoList]=useState(todos)
const dispatch  = useDispatch()
  const addTodo=(evt)=>{
    evt.preventDefault()
  setTodoList([...todoList,{todo:todo,category:category}])
dispatch(postTodo({task:todo,isComplete:false,category:category}))
    

  }

  return (
    <div className="App">
    <div className='Todo'>
     <h1>Todo List</h1>
     <div className='formDiv'>
        <input className='formInput' onChange={(evt)=>setTodo(evt.target.value)} type='text' placeholder='Add Todo' />
        <input className='formInput' onChange={(evt)=>setCategory(evt.target.value)} type='text' placeholder='category' />
        
        <button className='btn' onClick={addTodo}>ADD</button>

     </div>
     <div className='fieldDiv'>

     </div>
</div>
    </div>
  );
}

export default App;
