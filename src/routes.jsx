import { createBrowserRouter } from "react-router-dom";
import Banner from "./Component/Banner";
import App from "./Component/Gallery/Gellery";
import Home from "./Layout/Home";
import Main from "./Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
]);

export default router;
