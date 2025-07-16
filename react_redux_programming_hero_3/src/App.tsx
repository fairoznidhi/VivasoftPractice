import { useState } from 'react';
import './App.css'
import CounterWithClass from './components/CounterWithClassComponent'
import CounterWithFuncComponent from './components/CounterWithFUncComponent'
import UserInfoWithUseState from './components/UserInfoWithUseState';
import UserInfoWithUseReducer from './components/UserInfoWithUseReducer';
import TodoProvider from './context/TodoProvider';
import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';

function App() {
  const [count,setCount]=useState(0);
  return (
    // <div className='border border-purple-300 m-10 p-10'>
    //   {/* <CounterWithClass/> */}
    //   {/* <h1>Count = {count}</h1>
    //   <CounterWithFuncComponent count={count} setCount={setCount}/> */}
    //   {/* <UserInfoWithUseState/> */}
    //   {/* <UserInfoWithUseReducer/> */}
    // </div>
   <TodoProvider>
     <div>
      <TodoForm/>
      <TodoList/>
     </div>
   </TodoProvider>
  )
}

export default App
