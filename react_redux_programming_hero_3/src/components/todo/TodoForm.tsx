import { useContext, useState, type FormEvent } from "react"
import { TodoContext } from "../../context/TodoProvider"

const TodoForm = () => {
    const {state,dispatch}=useContext(TodoContext);
    const [task,setTask]=useState('')

    const handleSubmit=(e:FormEvent)=>{
        e.preventDefault();

        const todo={
            id: Math.random().toString(36).substring(2,7),
            title:task,
            isCompleted: false
        }
        console.log(todo)
        dispatch({type:'addTodo',payload:todo})
        console.log(state)
    }
  return (
    <div>
        <h1>Add Todo</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="Todo">Task</label>
            <input className="border border-red-300" type="text" name='todo' id='todo' onBlur={(e)=>setTask(e.target.value)}/>
            <button className="bg-purple-300 p-3 rounded" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default TodoForm