import { createBrowserRouter } from "react-router";
import HomePage from "../App/Pages/Home/Home";
import ErrorPage from "../App/Pages/Error/Error";
import MainLayout from "../App/MainLayout";
import TimeLinePage from "../App/Pages/Timeline/Timeline";
import StatsPage from "../App/Pages/Stats/Stats";
import HydrationFallBack from "../App/Components/HydrationFallback";
import FriendsDetails from "../App/Pages/Home/Components/FriendsDetails";

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
        loader: async () => {
          return await fetch("/public/Data.json");
        },
        hydrateFallbackElement: <HydrationFallBack />,
      },
      {
        path: "timeline",
        element: <TimeLinePage />,
      },
      { path: "stats", element: <StatsPage /> },
      {
        path: "/contact-details/:id",
        element: <FriendsDetails />,
        loader: async () => {
          return await fetch("/public/Data.json");
        },
        hydrateFallbackElement: <HydrationFallBack />,
      },
    ],
  },
]);
