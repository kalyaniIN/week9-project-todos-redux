import { useState } from "react";
import { useDispatch } from "react-redux";

import { addListItem } from "../reducers/todo/todoSlice";

export const AddTaskForm = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    dispatch(addListItem(inputValue));
    setInputValue("");
  };

  return (
    <form className="add-task-form">
      <input
        type="text"
        id="todo-input"
        placeholder="Enter Task"
        value={inputValue}
        onChange={handleInputChange}
        className="add-task-form-input"
      />
      <button
        type="submit"
        disabled={inputValue.trim() === ""}
        onClick={handleAddTask}
        className="add-task-form-button"
      >
        Add Task
      </button>
    </form>
  );
};
