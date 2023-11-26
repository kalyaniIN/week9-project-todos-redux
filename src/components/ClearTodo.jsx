import { useDispatch, useSelector } from "react-redux";

import { openModal } from "../reducers/modal/modalSlice";

export const ClearTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todoListItems);

  const handleClearTodo = () => {
    dispatch(openModal());
  };

  return (
    <button
      className="btn clearBtn"
      disabled={todos.length <= 0}
      onClick={handleClearTodo}
    >
      Clear Todos
    </button>
  );
};
