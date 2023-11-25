import { useSelector } from "react-redux";

import { TodoAmount } from "./TodoAmount";
import { TodoItem } from "./TodoItem";

import "./TodoList.css";

export const TodoList = () => {
  // subscribing to the store using selector
  const todoItems = useSelector((state) => state.todo.todoListItems);

  return (
    <div className="todo-list">
      <TodoAmount todoItems={todoItems} />
      <ul>
        {todoItems.map((task) => (
          <li key={task.id}>
            <TodoItem key={task.id} {...task} />
          </li>
        ))}
      </ul>
    </div>
  );
};
