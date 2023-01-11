import { ReactElement, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserInfo } from "../../context/userContext";

export default function ProtectedRoute({
  children,
}: {
  children: ReactElement;
}) {
  const { user } = useContext(UserInfo);

  if (!user.isSign) {
    return <Navigate to="/" replace />;
  }
  return children;
}
