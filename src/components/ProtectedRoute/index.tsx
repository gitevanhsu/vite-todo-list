import { ReactElement, useContext } from "react";
import { Navigate } from "react-router-dom";
import memberInfo from "../../context/userContext";

export default function ProtectedRoute({ children }: { children: ReactElement }) {
  const { member } = useContext(memberInfo);
  if (!member.isSign) {
    return <Navigate to="/" replace />;
  }
  return children;
}
