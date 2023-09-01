import React from 'react'
import { useState } from 'react'

function Age() {
  const [name, setName] = useState("");

  return (
    <div>
      <input onChange={(event) => setName(event.target.value)}/>
      <button>Predict Age {name}</button>
    </div>
  )
}

export default Age
