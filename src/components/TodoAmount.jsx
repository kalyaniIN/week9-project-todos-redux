import { useSelector } from "react-redux";

export const TodoAmount = () => {
  const todos = useSelector((state) => state.todo.todoListItems);
  const amountToDo = todos.filter((task) => task.complete);

  return (
    <div noTask={amountToDo.length <= 0 && todos.length <= 0}>
      <p className="todo-count">
        {amountToDo.length} of {todos.length} tasks completed
      </p>
    </div>
  );
};
