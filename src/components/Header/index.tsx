import { useContext } from "react";
import memberInfo from "../../context/userContext";
import Logo from "../Logo";
import SignOutButton from "../SignOutButton";
import { memberSignOut } from "../../utils/firebaseFuns";

export default function Header() {
  const { member, setMember } = useContext(memberInfo);

  const onSignOut = () => {
    memberSignOut();
    setMember({ name: "", uid: "", url: "", isSign: false });
  };

  return (
    <header className="absolute top-0 w-full h-[50px] px-[20px] py-[10px] flex items-center justify-between">
      <Logo isBig={false} />
      <div className="flex items-center">
        {member.url && (
          <img
            src={member.url}
            alt="avatar"
            className="w-[40px] h-[40px] mr-[10px] rounded-full"
          />
        )}
        <div className="font-semibold hidden sm:block">
          {member.name}
          的代辦
        </div>
        <SignOutButton clickHandler={onSignOut} />
      </div>
    </header>
  );
}
