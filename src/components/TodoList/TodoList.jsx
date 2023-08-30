import React, { useContext } from "react";
import Todo from "./Todo";
import { TodoContext } from "context/TodoContext";

const TodoList = () => {
  const [todos] = useContext(TodoContext);

  return (
    <>
      <div className="todo-list">
        {todos && todos.map((todo, index) => <Todo key={index} todo={todo} />)}
      </div>
      {todos.length === 0 && <p>There are no todos. Please Add some.</p>}
    </>
  );
};

export default TodoList;
