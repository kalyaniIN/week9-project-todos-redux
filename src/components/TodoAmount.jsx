import { useSelector } from "react-redux";

export const TodoAmount = () => {
  const todos = useSelector((store) => store.todo.todoListItems);
  const amountToDo = todos.filter((task) => task.complete);

  return (
    <div noTask={amountToDo.length <= 0 && todos.length <= 0}>
      <p>
        {amountToDo.length} of {todos.length} tasks completed
      </p>
    </div>
  );
};
