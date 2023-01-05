import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/vite-todo-list/");
  }, []);
  return <></>;
}
