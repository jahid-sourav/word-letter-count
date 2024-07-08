import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Another from "../pages/another/Another";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/another",
        element: <Another />,
      },
    ],
  },
]);
