import { AddTodoForm } from "./AddTodoForm";
import { TodoAmount } from "./TodoAmount";
import { TodoList } from "./TodoList";

import "./TodoApp.css";

export const TodoApp = () => (
  <div className="todo-app-wrapper-outer">
    <header className="todo-app-heading">Todo List</header>
    <div className="todo-app-wrapper">
      <AddTodoForm />
      <TodoAmount />
      <TodoList />
    </div>
  </div>
);
