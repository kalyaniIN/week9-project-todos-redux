import { useDispatch } from "react-redux";

import { toggleComplete } from "../reducers/todo/todoSlice";
import { DeleteTodo } from "./DeleteTodo";

export const TodoItem = ({ id, text, complete }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = (taskId) => {
    dispatch(toggleComplete(taskId));
  };

  return (
    <section className="todo-item">
      <label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          checked={complete}
          onChange={() => handleToggleComplete(id)}
        />
        {text}
      </label>
      <span>
        <DeleteTodo taskId={id} />
      </span>
    </section>
  );
};
