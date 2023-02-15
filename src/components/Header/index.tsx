import { createPortal } from "react-dom";
import { useContext, useState } from "react";
import memberInfo from "../../context/userContext";
import Logo from "../Logo";
import SignOutButton from "../SignOutButton";
import { memberSignOut } from "../../utils/firebaseFuns";
import Modal from "../Modal";

const modalNode = document.querySelector("#modal");

export default function Header() {
  const { member, setMember } = useContext(memberInfo);
  const [showModal, setShowModal] = useState(false);

  const onSignOut = () => {
    memberSignOut();
    setMember({ name: "", uid: "", url: "", isSign: false });
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = (e: React.SyntheticEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setShowModal(false);
  };

  return (
    <header className="absolute top-0 w-full h-[50px] px-[20px] py-[10px] flex items-center justify-between">
      <Logo isBig={false} />
      <div className="flex items-center">
        {member.url && (
          <div
            className="w-[40px] h-[40px] mr-[10px] rounded-full cursor-pointer overflow-hidden"
            role="button"
            tabIndex={0}
            onClick={handleOpenModal}
            onKeyDown={handleOpenModal}
          >
            <img src={member.url} alt="avatar" />
          </div>
        )}
        <div
          className="font-semibold hidden cursor-pointer sm:block"
          role="button"
          tabIndex={0}
          onClick={handleOpenModal}
          onKeyDown={handleOpenModal}
        >
          {member.name}
        </div>
        <SignOutButton clickHandler={onSignOut} />
      </div>
      {showModal &&
        modalNode &&
        createPortal(
          <Modal
            handleCloseModal={handleCloseModal}
            url={member.url}
            name={member.name}
          />,
          modalNode
        )}
    </header>
  );
}
