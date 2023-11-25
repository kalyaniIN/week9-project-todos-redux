import { AddTodoForm } from "./AddTodoForm";
import { TodoAmount } from "./TodoAmount";
import { TodoList } from "./todoList";

import "./ToDoApp.css";

export const TodoApp = () => (
  <div className="todo-app-wrapper">
    <header>
      <h1>Todo List</h1>
    </header>
    <AddTodoForm />
    <TodoAmount />
    <TodoList />
  </div>
);
