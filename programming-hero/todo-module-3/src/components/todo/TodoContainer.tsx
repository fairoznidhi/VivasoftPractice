import { useState } from "react";
import { useGetTodosQuery } from "../../redux/api/api";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  //From local state
  // const { todos } = useAppSelector((state) => state.todos);
  const [priority,setPriority]=useState('')
  console.log(priority)

  //From server
  const {data:todos,isError,isLoading}=useGetTodosQuery(priority)
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority}/>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        {/* <div className="bg-white text-2xl font-bold p-3 flex justify-center items-center rounded-md">
            <p>There is no task pending</p>
        </div> */}
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          {todos?.data.map((item) => (
            <TodoCard {...item}  isCompleted={item.isCompleted ?? false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
