import React, { ReactElement, useState } from "react";

import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import HomePage from "./pages/Home";
import TodoPage from "./pages/Todo";

import "./index.css";
import { UserInfo } from "./context/userContext";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/todo",
      element: (
        <ProtectedRoute>
          <TodoPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ],
  {
    basename: "/vite-todo-list/",
  }
);

function UserContext({ children }: { children: ReactElement }) {
  const [user, setUser] = useState({
    name: "王小明",
    uid: "",
    isSign: true,
  });
  return (
    <UserInfo.Provider value={{ user, setUser }}>{children}</UserInfo.Provider>
  );
}

function App() {
  return (
    <React.StrictMode>
      <UserContext>
        <RouterProvider router={router} />
      </UserContext>
    </React.StrictMode>
  );
}
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
