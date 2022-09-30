// React
import React from "react";
import ReactDOM from "react-dom/client";

// React Router
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// Components
import Root from "./components/routes/Root";

// CSS
import "./assets/css/index.css";
import Hero from "./components/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "search",
        element: <div>Hello Search Route!</div>,
        children: [
          {
            path: ":username",
            element: <div>USERNAMEROUTE</div>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
