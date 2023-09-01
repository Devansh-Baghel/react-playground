import React from "react";
import axios from "axios";
import { useState } from "react";

function Fetch() {
  const [catFact, setCatFact] = useState("");

  function getFact() {
    axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact)
    });
  }

  return (
    <div>
      <button onClick={getFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default Fetch;
