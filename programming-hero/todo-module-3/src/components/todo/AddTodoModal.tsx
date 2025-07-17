import { useState, type FormEvent } from "react";
import { useAddTodoMutation } from "../../redux/api/api";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  //For local state management
  // const dispatch=useAppDispatch();

  //For server
  const [addTodo, { data, isLoading, isError, isSuccess }] =
    useAddTodoMutation();
  console.log({ data, isLoading, isError, isSuccess });
  //[actualFunctionForPost,{data,isLoading,isError}]

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // const randomString=Math.random().toString(36).substring(2,7);
    const taskDetails = {
      // id:randomString,
      title: task,
      description: description,
      priority: priority,
      isCompleted:false,
    };
    // dispatch(addTodo(taskDetails))
    addTodo(taskDetails);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-semibold">
          Add todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add your task that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="task">Task</Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                name="name"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                name="username"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Priority</Label>
              <Select onValueChange={(value)=>setPriority(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Priority</SelectLabel>
                    <SelectItem value="high">high</SelectItem>
                    <SelectItem value="medium">medium</SelectItem>
                    <SelectItem value="low">low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
