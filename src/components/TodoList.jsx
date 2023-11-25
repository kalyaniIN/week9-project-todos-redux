import { useSelector, useDispatch } from "react-redux";
import { toggleComplete } from "../reducers/todo/todoSlice";
import { AddTaskForm } from "./AddTask";
import { DeleteTask } from "./DeleteTask";
import { TodoAmount } from "./TodoAmount";
import "./TodoList.css";
export const TodoList = () => {
  //subscribing to the store using selector
  const todoItems = useSelector((store) => store.todo.todoListItems);
  console.log(todoItems);

  const dispatch = useDispatch();

  const handleToggleComplete = (taskId) => {
    dispatch(toggleComplete(taskId));
  };

  return (
    <>
      <div className="todo-list">
        <h1 className="todo-list-title">Todo List</h1>
        <AddTaskForm />
        <TodoAmount todoItems={todoItems} />
        <ul className="todo-list-tasks">
          {todoItems.map((task) => (
            <li key={task.id} className={`todo-list-task ${task.complete ? 'todo-list-task-completed' : ''}`}>
              <input className="todo-list-checkbox"
                type="checkbox"
                checked={task.complete}
                onChange={() => handleToggleComplete(task.id)}
              />

              <span className="todo-list-texttext">{task.text}</span>
              <span>
                <DeleteTask taskId={task.id} />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
