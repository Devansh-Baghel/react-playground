import React, { useState } from "react";

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
      <form className="add-task" onSubmit={e => e.preventDefault()}>
        <input onChange={handleChange} />
        <button onClick={addTask} type="submit"> Add Task</button>
      </form>

      <div className="list">
        {todo.map((item) => {
          return (
            <div>
              <h3>{item.taskName}</h3>
              <button type="" onClick={() => deleteItem(item.id)}>
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
