import { TodoList } from "./components/todoList";
import { AddTaskForm } from "./components/AddTask";

export const App = () => {
  return (
    <main>
      <h1>Todo List</h1>
      <AddTaskForm />
      <TodoList />
    </main>
  );
};
