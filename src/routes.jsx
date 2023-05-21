import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Layout/Home";
import Main from "./Layout/Main";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import MyToys from "./pages/MyToys";
import PriveteRoute from "./PriveteRouter/PriveteRoute";
const Allpages = lazy(() => import("./pages/Allpages"));
const ToyDetails = lazy(() => import("./pages/ToyDetails"));
const AddToy = lazy(() => import("./pages/AddToy"));
import UpdateToy from "./pages/UpdateToy";
import LoadingSpinner from "./Component/loader/LoadingSpinner";
import ErrorPage from "./Component/ErrorPage/ErrorPage";
import Blogs from "./pages/Blogs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
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
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Allpages />
          </Suspense>
        ),
      },
      {
        path: "details/:id",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <PriveteRoute>
              <ToyDetails />
            </PriveteRoute>
          </Suspense>
        ),
        loader: ({ params }) =>
          fetch(`https://ass11.vercel.app/toy/${params.id}`),
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
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <AddToy />
          </Suspense>
        ),
      },
      {
        path: "updateToy/:id",
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(`https://ass11.vercel.app/toy/${params.id}`),
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
    ],
  },
]);

export default router;
