import React from "react";
import List from "./List";

function Content({ title, list = [] }) {
  return (
    <div className="lane-content">
      <div className="lane-title">{title}</div>
      <ul className="list-container">
        {list.map((item) => (
          <List key={item.id} id={item.id} type={item.type}>
            {" "}
            {item.content}{" "}
          </List>
        ))}
      </ul>
    </div>
  );
}
export default Content;
