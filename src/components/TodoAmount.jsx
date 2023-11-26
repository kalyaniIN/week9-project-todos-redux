import { useSelector } from "react-redux";

export const TodoAmount = () => {
  const todos = useSelector((state) => state.todo.todoListItems);
  const amountToDo = todos.filter((task) => task.complete);

  return (
    <div className="todo-amount">
      <p>
        {amountToDo.length} of {todos.length} tasks completed
      </p>
    </div>
  );
};
