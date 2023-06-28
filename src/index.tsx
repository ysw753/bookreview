import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css"; // Tailwind CSS 파일 임포트
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import NewBookReview from "./pages/NewBookReview";
import ReviewDetail from "./pages/ReviewDetail";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, path: "/", element: <Home /> },
      {
        path: "/write",
        element: (
          <ProtectedRoute>
            <NewBookReview />
          </ProtectedRoute>
        ),
      },
      {
        path: "/review/:id",
        element: <ReviewDetail />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
