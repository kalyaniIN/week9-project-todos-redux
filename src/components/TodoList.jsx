import { useSelector } from "react-redux";

import { TodoItem } from "./TodoItem";

import "./TodoList.css";

export const TodoList = () => {
  // subscribing to the store using selector
  const todoItems = useSelector((state) => state.todo.todoListItems);

  return (
    <div className="todo-list">
      {todoItems.map((task) => (
        <TodoItem key={task.id} {...task} />
      ))}
    </div>
  );
};
