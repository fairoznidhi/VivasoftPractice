import { useReducer, type ChangeEvent } from "react"

const initialState={
    name:'',
    age:'',
    hobbies:[] as string[],
}
type TAction={
    type: string,
    payload:string
}
const reducer=(currentState: typeof initialState,action:TAction)=>{
    switch(action.type){
        case "addName":
            return { ...currentState,name:action.payload }
        case "addAge":
            return {...currentState,age:action.payload}
        case "addHobby":
            return {...currentState,hobbies:[...currentState.hobbies,action.payload]}
        default:
            return currentState;
    }
}
const UserInfoWithUseReducer=()=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    const handleSubmit=(e:ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(state)
    }
    console.log(state)
     return <div>
        <form onSubmit={handleSubmit}>
            <input onChange={(e)=>dispatch({type:'addName',payload:e.target.value})}  className="border border-purple-300 m-10 p1-" type="text" name="name" id="name" placeholder="name" />
            <input onChange={(e)=>dispatch({type:'addAge',payload:e.target.value})}  className="border border-purple-300 m-10 p1-" type="number" name="age" id="age" placeholder="age" />
            <input onBlur={(e)=>dispatch({type:'addHobby',payload:e.target.value})} className="border border-purple-300 m-10 p1-" type="text" name="hobbies" id="hobbies" placeholder="hobby" />
            <button className="btn bg-purple-300 m-10 p-4 rounded" type="submit">Submit</button>
        </form>
    </div>
}

export default UserInfoWithUseReducer