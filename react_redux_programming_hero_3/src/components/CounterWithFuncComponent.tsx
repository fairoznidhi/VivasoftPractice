import ChildComponent from "./ChildComponent"

type TProps={
    count:number,
    setCount:  React.Dispatch<React.SetStateAction<number>>
}
const CounterWithFuncComponent=({count,setCount}: TProps)=>{
    return <div className="border border-red-500 p-10 m-10">
        <button className="bg-purple-400 p-3 rounded text-white" onClick={()=>setCount((prev)=>prev+1)}>
            Click for Update
        </button>
        <ChildComponent count={count}/>

    </div>
    }
export default CounterWithFuncComponent