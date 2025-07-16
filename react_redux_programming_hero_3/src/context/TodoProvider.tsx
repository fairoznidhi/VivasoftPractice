import { createContext, useReducer, type ReactNode } from "react";

export const TodoContext=createContext<{state:TTodo[];dispatch:React.Dispatch<TAction>}|null>(null);
export type TTodo={
    id:string,
    title:string,
    isCompleted:boolean;
}
const initialState:TTodo[]=[];

type TAction={
    type:"addTodo"|"taskComplete",
    payload: TTodo | string;
}
const typeConstants={
    ADD_TODO:"addTodo",
    TASK_COMPLETE:'taskComplete',
}
const reducer=(currentState:TTodo[] ,action:TAction)=>{
    switch(action.type){
        case typeConstants.ADD_TODO:
            return [...currentState,action.payload] 
        case typeConstants.TASK_COMPLETE:
            return currentState.map((item)=>item.id===action.payload ? {...item, isCompleted:!item.isCompleted} : item)
        default:
            return currentState
    }
}
type TodoProviderProps={
    children:ReactNode;
}
const TodoProvider = ({children}:TodoProviderProps)=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    const values={
        state,dispatch,
    }
    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
}
export default TodoProvider;