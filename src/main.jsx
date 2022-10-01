// React
import React from "react";
import ReactDOM from "react-dom/client";

// React Router
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// Components
import Root from "./components/routes/Root";
import Hero from "./components/Hero";
import App from "./components/routes/App";

import { loader as followsLoader } from "./components/routes/Follows";

// CSS
import "./assets/css/index.css";
import ErrorPage from "./components/ErrorPage";
import Follows from "./components/routes/Follows";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "search",
        element: <App />,
        children: [
          {
            path: ":username",
            element: <Follows />,
            loader: followsLoader,
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
