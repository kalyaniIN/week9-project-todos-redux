import { AddTodoForm } from "./components/AddTodoForm";
import { TodoAmount } from "./components/TodoAmount";
import { TodoList } from "./components/todoList";

export const App = () => {
  return (
    <main>
      <header>
        <h2>Todo List</h2>
      </header>
      <AddTodoForm />
      <TodoAmount />
      <TodoList />
    </main>
  );
};
