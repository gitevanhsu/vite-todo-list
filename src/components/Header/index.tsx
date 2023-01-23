import { useContext } from "react";
import { UserInfo } from "../../context/userContext";
import Logo from "../Logo";
import SignOutButton from "../SignOutButton";
import { memberSignOut } from "../../utils/firebaseFuns";

export default function Header() {
  const { user, setUser } = useContext(UserInfo);

  const onSignOut = () => {
    memberSignOut();
    setUser({ name: "", uid: "", isSign: false });
  };

  return (
    <header className="absolute top-0 w-full h-[50px] px-[20px] py-[10px] flex items-center justify-between">
      <Logo isBig={false} />
      <div className="flex">
        <div className="font-semibold hidden sm:block">{user.name}的代辦</div>
        <SignOutButton clickHandler={onSignOut} />
      </div>
    </header>
  );
}
