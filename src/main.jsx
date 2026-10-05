import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { router } from "./Routes/Routes";
import { StrictMode } from "react";
import FriendProvider from "./Context/ContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router} />
    </FriendProvider>
  </StrictMode>,
);
