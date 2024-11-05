import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import Statistics from "../Pages/Statistics/Statistics";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Cards from "../components/Cards";
// import Cards from "../components/Cards";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/categories.json"),
        children: [
          {
            path: "/category/:category",
            element: <Cards />,
            errorElement: <Error />,
            loader: () => fetch("/data.json"),
          },
        ],
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
