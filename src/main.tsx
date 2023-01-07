import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import TodoPage from "./pages/Todo";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/vite-todo-list/",
    element: <HomePage />,
  },
  {
    path: "/vite-todo-list/todo/",
    element: <TodoPage />,
  },
  {
    path: "*",
    element: <Navigate to="/vite-todo-list/" replace />,
  },
]);

function App() {
  return (
    <React.StrictMode>
      <div className="relative h-screen pt-[50px] pb-[20px] my-home-bg">
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </React.StrictMode>
  );
}
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
