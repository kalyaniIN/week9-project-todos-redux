import { useState } from "react";
import { useSelector ,useDispatch } from "react-redux";
import { addListItem , toggleComplete} from "../reducers/todo/todoSlice";
import { DeleteTask } from "./DeleteTask";
import { TodoAmount } from "./TodoAmount";
import "./TodoList.css";
export const TodoList = () => {
  
  //subscribing to the store using selector
  const todoItems = useSelector((store) => store.todo.todoListItems);
  console.log(todoItems);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    //dispatch an action
    dispatch(addListItem(inputValue));
    setInputValue("");
  };
  const handleToggleComplete = (taskId) => {
    dispatch(toggleComplete(taskId));
  };

  return (
    <>
    <div className="todo-list">
      <h1>Todo List</h1>
            <form>
              <input
                type="text"
                id="todo-input"
                placeholder="Enter Task"
                value={inputValue}
                onChange={handleInputChange}
              />
              <button type="submit" onClick={handleAddTask}>
                Add Task
              </button>
            </form>
            <TodoAmount todoItems={todoItems} />
      <ul>
            {todoItems.map((task) => (
              <li key={task.id}>
                  <input
                type="checkbox"
                checked={task.complete}
                onChange={() => handleToggleComplete(task.id)}
              />
               
                {task.text}
                <span>
                <DeleteTask taskId={task.id}/>
              </span>
                
              </li>
             
            ))}
      </ul>
    </div>
    </>
  );
};
