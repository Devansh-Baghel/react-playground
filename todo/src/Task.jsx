import React from 'react'

function Task(props) {
  return (
    <div>
      <h2>{props.taskName}</h2>
      <button type="" onClick={() => props.deleteItem(props.id)}>
        X
      </button>
    </div>
  )
}

export default Task
