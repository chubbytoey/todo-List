import React from "react";
import Content from "./Content";
import { useTodo } from "../contexts/ActionContext";

function Lane() {
  const [{ todos, doing, done }] = useTodo();
  return (
    <div className="lane-container">
      <Content title="Todo" list={todos} />
      <Content title="Doing" list={doing} />
      <Content title="Done" list={done} />
    </div>
  );
}
export default Lane;
