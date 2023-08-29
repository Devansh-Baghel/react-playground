import React, { useState } from "react";
import Task from "./Task";

function App() {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    const task = {
      id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
      taskName: newTask,
    }
    setTodo([...todo, task]);
  }

  function deleteItem(id) {
    setTodo(todo.filter(task => task.id !== id))
  }

  return (
    <div className="app">
      <div className="add-task">
        <input onChange={handleChange} />
        <button onClick={addTask}> Add Task</button>
      </div>

      <div className="list">
        {todo.map((item) => {
          return <Task taskName={item.taskName} id={item.id} deleteItem={deleteItem}/>
        })}
      </div>
    </div>
  );
}

export default App;
