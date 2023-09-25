import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <Link to={"./spinach"}> Spinach </Link>
      <Link to={"./popeye"}> Popeye </Link>
      <h2>The Profile Visited is here:</h2>
      <Outlet />
    </div>
  );
};

export default Profile;
