import React, { createContext, useState, useEffect, useContext } from "react";

const ActionContext = createContext({});

export function Provider({ children }) {
  const [todos, setTodos] = useState([]);
  return (
    <ActionContext.Provider value={{ todos, setTodos }}>
      {children}
    </ActionContext.Provider>
  );
}

export function useTodo() {
  const { todos, setTodos } = useContext(ActionContext);
  const handleAddTodo = (todoInput) => {
    setTodos([...todos, { id: Date.now(), content: todoInput, type: "todo" }]);
  };
  const handleTodoClick = (itemID) => {
    const cloneTodo = [...todos];
    const itemIndex = cloneTodo.findIndex((todo) => todo.id === itemID);
    if (cloneTodo[itemIndex]) {
      cloneTodo[itemIndex].type = "todo";
    }
    setTodos(cloneTodo);
  };
  const handleDoClick = (itemID) => {
    const cloneTodo = [...todos]; //cloned with reference change
    const itemIndex = cloneTodo.findIndex((todo) => todo.id === itemID);
    if (cloneTodo[itemIndex]) {
      cloneTodo[itemIndex].type = "doing";
    }
    setTodos(cloneTodo);
    // setDoings([...doings, todos[itemIndex]]);
    // return setTodos(todos.filter((_, index) => index !== itemIndex));
  };

  const handleDoneClick = (itemID) => {
    const cloneTodo = [...todos];
    const itemIndex = cloneTodo.findIndex((todo) => todo.id === itemID);
    if (cloneTodo[itemIndex]) {
      cloneTodo[itemIndex].type = "done";
    }
    setTodos(cloneTodo);
    // return setTodos(todos.filter((_, index) => index !== itemIndex));
    // if (type === "todo") {
    //   if(todos[itemIndex])
    //     // setDone([...done, todos[itemIndex]]);
    //   setTodos(todos.filter((_, index) => index !== itemIndex));
    // }
    // if (type === "doing") {
    //   if(doings[itemIndex])
    //     // setDone([...done, doings[itemIndex]]);
    //   setDoings(doings.filter((_, index) => index !== itemIndex));
    // }
  };

  useEffect(() => {
    if (!todos.length)
      setTodos(JSON.parse(window.localStorage.getItem("todos")) || []);
    if (todos.length)
      window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [setTodos, todos]);

  return [
    {
      todos: todos.filter((todo) => todo.type === "todo"),
      doing: todos.filter((todo) => todo.type === "doing"),
      done: todos.filter((todo) => todo.type === "done")
    },
    { handleAddTodo, handleTodoClick, handleDoClick, handleDoneClick }
  ];
}

export default ActionContext;
