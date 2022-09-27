// React
import React from "react";
import ReactDOM from "react-dom/client";

// React Router
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello Root Route!</div>,
  },
  {
    path: "/search",
    element: <div>Hello Search Route!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
