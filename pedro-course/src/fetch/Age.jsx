import axios from 'axios';
import React from 'react'
import { useState } from 'react'

function Age() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [name2, setName2] = useState("");
  const [count, setCount] = useState();

  function getAge() {
    axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setAge(res.data.age)
      setName2(res.data.name)
      setCount(res.data.count)
    })
  }

  return (
    <div>
      <input onChange={(event) => setName(event.target.value)}/>
      <button onClick={getAge}>Predict Age</button>
      <h2>Name: {name2}</h2>
      <h2>Age: {age}</h2>
      <h2>Count: {count}</h2>
    </div>
  )
}

export default Age
