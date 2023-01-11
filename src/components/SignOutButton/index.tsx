import { useContext } from "react";
import { UserInfo } from "../../context/userContext";

interface SignOutType {
  clickHandler: () => void;
}

export default function SignOutButton({ clickHandler }: SignOutType) {
  const { setUser } = useContext(UserInfo);
  return (
    <button className="ml-5" onClick={clickHandler}>
      登出
    </button>
  );
}
