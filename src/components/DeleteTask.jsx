import { useDispatch } from "react-redux";
import { removeListItem } from "../reducers/todo/todoSlice";

export const DeleteTask = ({ taskId }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    // Dispatch the deleteListItem action with the taskId
    dispatch(removeListItem(taskId));
  };

  return (
    <div>
      <button onClick={handleDeleteTask}>Delete Task</button>
    </div>
  );
};
