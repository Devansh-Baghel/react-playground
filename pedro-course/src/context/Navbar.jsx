import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h2>
        <Link to={"/"}>Home </Link>
        <Link to={"/profile"}> Profile </Link>
        <Link to={"/contact"}>Contact</Link>
      </h2>
    </div>
  );
}

export default Navbar;
