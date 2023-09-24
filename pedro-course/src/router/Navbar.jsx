import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h2>
        <Link to={"/"}>Home </Link>
        <Link to={"/menu"}> Menu </Link>
        <Link to={"/contact"}>Contact</Link>
      </h2>
    </div>
  );
}

export default Navbar;
