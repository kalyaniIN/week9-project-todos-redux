import { useSelector } from "react-redux";
import "./TodoAmount.css";

export const TodoAmount = () => {
  const todos = useSelector((store) => store.todo.todoListItems);
  const amountToDo = todos.filter((task) => task.complete);

  return (
    <div className="todo-list-amount-container"      noTask={amountToDo.length <= 0 && todos.length <= 0}>
      <span className="todo-list-amount">
        {amountToDo.length} of {todos.length} tasks completed
      </span>
    </div>
  );
};
