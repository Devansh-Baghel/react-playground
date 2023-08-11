import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [currTime, setTime] = useState(new Date().toLocaleTimeString())
  let currBg = ""

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  })

  currBg = currTime.replaceAll(":", "")
  {document.body.style.backgroundColor = "#" + currBg}

  return (
    <>
      <h1>
        Current Time: {currTime}
      </h1>
      <h1>
        Hex Color: #{currBg}
      </h1>
    </>
  )
}

export default App
