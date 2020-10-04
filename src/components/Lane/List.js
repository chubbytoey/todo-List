import React, { useContext } from "react";
import ActionContext from "../contexts/ActionContext";

function List({ index, children, type }) {
  const { onDoneClick, onDoClick } = useContext(ActionContext);
  return (
    <li className="list-item">
      {children}
      <button className="btn" onClick={() => onDoClick(index)}>
        Do
      </button>
      <button className="btn" onClick={() => onDoneClick(type)(index)}>
        Done
      </button>
    </li>
  );
}
export default List;
