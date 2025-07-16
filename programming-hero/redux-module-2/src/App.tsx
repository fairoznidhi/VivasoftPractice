import { decrement, decrementByValue, increment, incrementByValue } from "./features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const {count,boxNumber} = useAppSelector((state)=>state.counter)
  const dispatch=useAppDispatch();

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="flex border border-purple-300 rounded-md bg-slate-50 p-4 gap-3">
        <button className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white" onClick={()=>dispatch(incrementByValue({value:5}))}>Increment By 5</button>
        <button className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white" onClick={()=>dispatch(increment())}>Increment</button>
        <h1 className="text-3xl">{count}</h1>
        <button className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white" onClick={()=>dispatch(decrement())}>Decrement</button>
        <button className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white" onClick={()=>dispatch(decrementByValue({value:5}))}>Decrement By 5</button>
      </div>
      <div className="mt-4 text-2xl">
        Boxes:{ "🟩".repeat(boxNumber)}
      </div>
    </div>
  );
}

export default App;
