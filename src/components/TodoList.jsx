import { useSelector, useDispatch } from "react-redux";
import { toggleComplete } from "../reducers/todo/todoSlice";

import { AddTaskForm } from "./AddTask";
import { DeleteTask } from "./DeleteTask";
import { TodoAmount } from "./TodoAmount";

import "./TodoList.css";

export const TodoList = () => {
  //subscribing to the store using selector
  const todoItems = useSelector((store) => store.todo.todoListItems);
  console.log(todoItems);

  const dispatch = useDispatch();

  const handleToggleComplete = (taskId) => {
    dispatch(toggleComplete(taskId));
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <AddTaskForm />
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
              <DeleteTask taskId={task.id} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
