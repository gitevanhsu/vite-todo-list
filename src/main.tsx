import React, { ReactElement, useEffect, useState } from "react";

import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  redirect,
  useNavigate,
} from "react-router-dom";

import HomePage from "./pages/Home";
import TodoPage from "./pages/Todo";

import "./index.css";
import { UserInfo } from "./context/userContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { onAuthStateChanged } from "firebase/auth";
import { auth, getMemberInfo } from "./utils/firebaseFuns";
import { MemberInfo } from "./types";

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
    isSign: false,
  });
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getMemberInfo(user.uid).then((memberData) => {
          setUser({ ...(memberData as MemberInfo), isSign: true });
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
