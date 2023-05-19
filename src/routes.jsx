import { createBrowserRouter } from "react-router-dom";
import Home from "./Layout/Home";
import Main from "./Layout/Main";
import Signin from "./pages/Signin";
import WrapTabs from "./Component/Tabs";
import SignUp from "./pages/SignUp";
import MyToys from "./pages/MyToys";
import PriveteRoute from "./PriveteRouter/PriveteRoute";
import Allpages from "./pages/Allpages";
import ToyDetails from "./pages/ToyDetails";
import AddToy from "./pages/AddToy";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Main />,
      },

      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "alltoys",
        element: <Allpages />,
        loader: () => fetch("http://localhost:5000/toy"),
      },
      {
        path: "details/:id",
        element: <ToyDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`),
      },
      {
        path: "mytoy",
        element: (
          <PriveteRoute>
            <MyToys />
          </PriveteRoute>
        ),
      },
      {
        path: "addtoy",
        element: <AddToy />,
      },
    ],
  },
]);

export default router;
