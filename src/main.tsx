import { ReactElement, useEffect, useMemo, useState } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import "./index.css";
import HomePage from "./pages/Home";
import TodoPage from "./pages/Todo";
import WorksPage from "./pages/Works";
import UserInfo from "./context/userContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { auth, getMemberInfo } from "./utils/firebaseFuns";
import store from "./store";

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
      path: "/works",
      element: (
        <ProtectedRoute>
          <WorksPage />
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
  const [member, setMember] = useState({
    name: "王小明",
    uid: "",
    isSign: false,
    url: "",
  });
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getMemberInfo(user.uid).then((memberData) => {
          setMember({ ...memberData, isSign: true });
        });
      }
    });

    return () => unsubscribe();
  }, []);

  const memberInfoValue = useMemo(() => ({ member, setMember }), [member]);

  return (
    <UserInfo.Provider value={memberInfoValue}>{children}</UserInfo.Provider>
  );
}

function App() {
  return (
    <UserContext>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </UserContext>
  );
}
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
