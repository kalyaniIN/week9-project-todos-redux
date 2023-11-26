import { useDispatch } from "react-redux";
import { clearList } from "../reducers/todo/todoSlice";
import { closeModal } from "../reducers/modal/modalSlice";

import "./Modal.css";

export const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className="modalContainer">
      <div className="modal">
        <h4>Do you want to clear all todos?</h4>
        <div className="btnContainer">
          <button
            type="button"
            className="btn confirmBtn"
            onClick={() => {
              dispatch(clearList());
              dispatch(closeModal());
            }}
          >
            Confirm
          </button>
          <button
            type="button"
            className="btn clearBtn"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
