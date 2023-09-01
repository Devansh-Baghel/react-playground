import React from "react";
import axios from "axios";

function Fetch() {
  function getFact() {
    axios.get("https://catfact.ninja/fact").then((res) => {
      console.log(res.data)
      return res.data
    });
  }

  return (
    <div>
      <button onClick={getFact}>Generate Cat Fact</button>
      <p></p>
    </div>
  );
}

export default Fetch;
