import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Project from "./pages/Project.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Coder from "./pages/Coder.jsx";
import Didimo from "./pages/Didimo.jsx";
import Mobile from "./pages/Mobile.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/project/Didimo",
    element: <Didimo />,
  },
  {
    path: "/project/Coder",
    element: <Coder />,
  },
  {
    path: "/project/Portfolio",
    element: <Portfolio />,
  },
  {
    path: "/project/Sikeang",
    element: <Mobile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
