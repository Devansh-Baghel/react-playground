import React from "react";

function Task(props) {
  return (
    <div>
      <h2 style={{color: props.completed ? "green" : "black"}}>{props.taskName}</h2>
      <button onClick={() => props.completeTask(props.id)}>Complete</button>
      <button type="" onClick={() => props.deleteItem(props.id)}>
        X
      </button>
    </div>
  );
}

export default Task;
