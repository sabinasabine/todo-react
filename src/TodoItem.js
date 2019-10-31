import React from "react";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };

  return (
    <div className="todo-item">
      <div className="text">
        <input
          type="checkbox"
          checked={props.item.completed}
          onChange={() => props.handleChange(props.item.id)}
        />
        <span style={props.item.completed ? completedStyle : null}>
          {props.item.text}
        </span>
      </div>
      <button onClick={() => props.delToDo(props.item.id)}>X</button>
    </div>
  );
}

export default TodoItem;
