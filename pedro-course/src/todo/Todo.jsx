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
      completed: false,
    };
    setTodo([...todo, task]);
  }

  function deleteItem(id) {
    setTodo(todo.filter((task) => task.id !== id));
  }

  function completeTask(id) {
    setTodo(
      todo.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
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
            <Task
              taskName={item.taskName}
              id={item.id}
              deleteItem={deleteItem}
              completeTask={completeTask}
              completed={item.completed}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
