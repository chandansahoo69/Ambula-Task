import { TodoContext } from "context/TodoContext";
import React, { useContext } from "react";

const Todo = ({ todo }) => {
  const [todos, setTodos] = useContext(TodoContext);

  const handleCompleteTodo = (e) => {
    // filter the todos

    const filteredTodos = todos.map((item) => {
      if (item.id === e.target.value) {
        item.completed = false;
        // only if it is checked then set completed to true
        if (e.target.checked) {
          item.completed = true;
        }
      }

      return item;
    });

    setTodos(filteredTodos);
  };

  // function for handling delete todo
  const handleDeleteTodo = (e, id) => {
    e.preventDefault();
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodos(filteredTodos);
  };

  const isChecked = todo.completed ? "checked" : "";

  return (
    <>
      <div className={`todo-item ${isChecked && "marked-todo"}`}>
        <div className="todo-left-item">
          <input
            type="checkbox"
            checked={isChecked}
            id={todo.id}
            value={todo.id}
            onChange={(e) => handleCompleteTodo(e)}
          />
          <label htmlFor={todo.id}>{todo.title}</label>
        </div>
        <button
          className="custom-btn todo-delete-btn"
          type="button"
          name="button"
          onClick={(e) => handleDeleteTodo(e, todo.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Todo;
