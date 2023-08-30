import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  // get todos from localstorage
  const getTodos = JSON.parse(localStorage.getItem("todos"));
  const [todos, setTodos] = useState(getTodos || []);

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {children}
    </TodoContext.Provider>
  );
};
