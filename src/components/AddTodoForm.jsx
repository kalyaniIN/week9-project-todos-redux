import { useState } from "react";
import { useDispatch } from "react-redux";

import { addListItem } from "../reducers/todo/todoSlice";

export const AddTodoForm = () => {
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
    <div >
      <form className="add-task-form">
        <label htmlFor="new-item" className="input-container">
            <textarea
              id="textArea"
              rows="2"
              placeholder="Add Todo!"
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
              Add
            </button>
          </label>
      </form>
    </div>
  );
};
