import { useDispatch } from "react-redux";

import { removeListItem } from "../reducers/todo/todoSlice";

export const DeleteTodo = ({ taskId }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    // Dispatch the removeListItem action with the taskId
    dispatch(removeListItem(taskId));
  };

  return (
    <div>
      <button onClick={handleDeleteTask} className="delete-button">
        ❌
      </button>
    </div>
  );
};
