import { createBrowserRouter } from "react-router";
import HomePage from "../App/Pages/Home/Home";
import ErrorPage from "../App/Pages/Error/Error";
import MainLayout from "../App/MainLayout";
import TimeLinePage from "../App/Pages/Timeline/Timeline";
import StatsPage from "../App/Pages/Stats/Stats";

//

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "timeline",
        element: <TimeLinePage />,
      },
      { path: "stats", element: <StatsPage /> },
    ],
  },
]);
