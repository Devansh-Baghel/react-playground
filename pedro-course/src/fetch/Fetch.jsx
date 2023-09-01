import React from "react";

function Fetch() {
  fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <div>
      <button type="button">Generate Cat Fact</button>
      <p></p>
    </div>
  );
}

export default Fetch;
