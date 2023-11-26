import { useSelector } from "react-redux";

import { AddTodoForm } from "./AddTodoForm";
import { TodoAmount } from "./TodoAmount";
import { TodoList } from "./TodoList";
import { ClearTodo } from "./ClearTodo";
import { Modal } from "./Modal";

import "./TodoApp.css";

export const TodoApp = () => {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <div className="todo-app-wrapper-outer">
      {isOpen && <Modal />}
      <header className="todo-app-heading">Todo List</header>
      <div className="todo-app-wrapper">
        <AddTodoForm />
        <TodoAmount />
        <TodoList />
        <ClearTodo />
      </div>
    </div>
  );
};
