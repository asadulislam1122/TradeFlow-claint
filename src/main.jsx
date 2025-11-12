import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { RouterProvider } from "react-router";
import { router } from "./Router/Router.jsx";
import AuthProvaider from "./Provaider/AuthProvaider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvaider>
      <RouterProvider router={router} />
    </AuthProvaider>
    <ToastContainer />
  </StrictMode>
);
