import { useDispatch } from "react-redux";

import { openModal } from "../reducers/modal/modalSlice";

export const ClearTodo = () => {
  const dispatch = useDispatch();

  const handleClearTodo = () => {
    dispatch(openModal());
  };

  return (
    <button className="btn clearBtn" onClick={handleClearTodo}>
      Clear Todos
    </button>
  );
};
