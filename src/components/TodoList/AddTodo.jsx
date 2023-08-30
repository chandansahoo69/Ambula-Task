import React, { useContext, useEffect, useState } from "react";
import { TodoContext } from "context/TodoContext";
import useToast from "hooks/useHooks";
import { v4 as uuidv4 } from "uuid";

const AddTodo = () => {
  const { showToast } = useToast();
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useContext(TodoContext);

  // function for changing the title of todo
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  // function for adding todo in todo-list
  const handleAddTodo = (e) => {
    e.preventDefault();

    // if title is not there show error
    if (title === "" || title === null) {
      showToast("Please enter a todo", "error");
      return;
    }

    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
  };

  // store todos in localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="todo-input-container">
        <input
          type="text"
          placeholder="Add Todo"
          className="todo-input"
          value={title}
          onChange={(e) => handleChangeTitle(e)}
        />

        <button
          className="custom-btn todo-btn"
          type="button"
          name="button"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default AddTodo;
