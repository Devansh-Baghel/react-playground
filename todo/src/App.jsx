import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    setTodo([...todo, newTask]);
  }

  function deleteItem(taskName) {
    setTodo(todo.filter(task => task !== taskName))
  }

  return (
    <div className="app">
      <div className="add-task">
        <input onChange={handleChange} />
        <button onClick={addTask}> Add Task</button>
      </div>

      <div className="list">
        {todo.map((item) => {
          return (
            <div>
              <h2>{item}</h2>
              <button type="" onClick={() => deleteItem(item)}>
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
