import  { useState } from "react";
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
    if (inputValue.trim() !== "") {
      dispatch(addListItem(inputValue));
      setInputValue("");
    }
  };

  return (
    <form className="add-task-form">
      <input
        type="text"
        id="todo-input"
        placeholder="Enter Task"
        value={inputValue}
        onChange={handleInputChange}
        className="add-task-form_input"
      />
      <button type="submit" onClick={handleAddTask} className="add-task-form_button">
        Add Task
      </button>
    </form>
  );
};


