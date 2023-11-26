import { useDispatch } from "react-redux";

import { toggleComplete } from "../reducers/todo/todoSlice";
import { DeleteTask } from "./DeleteTask";

export const TodoItem = ({ id, text, complete }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = (taskId) => {
    dispatch(toggleComplete(taskId));
  };

  return (
    <div className="todo-container">

      <p className="todo-text">{text}</p>
          <section className="todo-child">
            <label htmlFor={id} className={complete ? 'checkbox-label done' : 'checkbox-label'}>
              <input
                id={id}
                type="checkbox"
                checked={complete}
                onChange={() => handleToggleComplete(id)}
                className="checkbox-input"/>
                <span className="checkbox-custom"></span>
             
            </label>
            <span>
              <DeleteTask taskId={id} />
            </span>
          </section>

    </div>
  );
};
