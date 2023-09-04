import axios from 'axios';
import React from 'react'
import { useState } from 'react'

function Excuse() {
  const [display, setDisplay] = useState("...");

  function getExcuse(category){
    axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}`).then((res) => {
      setDisplay(res.data[0].excuse)
    })
  }

  return (
    <div>
      <h2>Generate an Excuse</h2>
      <button onClick={() => getExcuse("party")}>Party</button>
      <button onClick={() => getExcuse("family")}>Family</button>
      <button onClick={() => getExcuse("office")}>Office</button>
      <h5>Excuse: {display}</h5>
    </div>
  )
}

export default Excuse
