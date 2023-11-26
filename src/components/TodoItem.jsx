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
      <input
        id={id}
        type="checkbox"
        value={text}
        checked={complete}
        onChange={() => handleToggleComplete(id)}
      />
      <label htmlFor={id}>{text}</label>
      <span>
        <DeleteTodo taskId={id} />
      </span>
    </section>
  );
};
