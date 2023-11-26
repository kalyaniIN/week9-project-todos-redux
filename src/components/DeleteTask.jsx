import { useDispatch } from "react-redux";

import { removeListItem } from "../reducers/todo/todoSlice";
import bin from './images/trash-can-regular.svg';

export const DeleteTask = ({ taskId }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    // Dispatch the removeListItem action with the taskId
    dispatch(removeListItem(taskId));
  };

  return (
    <div>
      <button className="btn-delete" onClick={handleDeleteTask}>
      <img src={bin} alt="delete bin" />
      </button>
    </div>
  );
};
