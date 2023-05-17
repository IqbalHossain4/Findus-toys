import { createBrowserRouter } from "react-router-dom";
import Banner from "./Component/Banner";
import Home from "./Layout/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children:[
      {
        path:"/",
        element:<Banner/>
      }
    ]
  },
]);

export default router;
