import { useState, useEffect } from "react";

function useTodo() {
  const [todos, setTodos] = useState([]);
  const handleAddTodo = (todoInput) => {
    setTodos([...todos, { id: Date.now(), content: todoInput, type: "todo" }]);
  };
  const handleTodoClick = (itemID) => {
    const cloneTodo = [...todos];
    const itemIndex = cloneTodo.findIndex((todo) => todo.id === itemID);
    if (cloneTodo[itemIndex]) {
      cloneTodo[itemIndex].type = "done";
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
    setTodos(JSON.parse(window.localStorage.getItem("todos")) || []);
  }, [setTodos]);

  useEffect(() => {
    if (todos.length)
      window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [setTodos, todos]);

  return [
    todos,
    { handleAddTodo, handleTodoClick, handleDoClick, handleDoneClick }
  ];
}
export default useTodo;
