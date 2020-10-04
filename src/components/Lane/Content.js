import React from "react";
import List from "./List";

function Content({ type, title, list = [] }) {
  return (
    <div className="lane-content">
      <div className="lane-title">{title}</div>
      <ul className="list-container">
        {list.map((item, index) => (
          <List type={type} index={index}>
            {" "}
            {item}{" "}
          </List>
        ))}
      </ul>
    </div>
  );
}
export default Content;
