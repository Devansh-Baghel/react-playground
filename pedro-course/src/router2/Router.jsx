import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import DefaultProfile from "./DefaultProfile";
import App from "./App";
import Profile from "./Profile";
import Spinach from "./Spinach";
import Popeye from "./Popeye";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "profile",
      element: <Profile />,
      children: [
        { index: true, element: <DefaultProfile /> },
        { path: "spinach", element: <Spinach /> },
        { path: "popeye", element: <Popeye /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
