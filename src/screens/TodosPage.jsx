import AddTodo from "components/TodoList/AddTodo";
import TodoList from "components/TodoList/TodoList";
import React, { useContext } from "react";
import "../styles/Todo.css";
import { TodoContext } from "context/TodoContext";

const TodosPage = () => {
  const [todos] = useContext(TodoContext);

  const completedTodoCount = todos.filter((item) => item.completed);

  return (
    <>
      <div className="todo-container">
        <div className="todo-box">
          <h1 className="todo-title">Add Todo</h1>
          <AddTodo />
          <TodoList />
          <div className="todo-info">
            <div className="todo-info-title">Total Todo: {todos.length}</div>
            <div className="todo-info-title">
              Completed Todo: {completedTodoCount.length}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodosPage;
