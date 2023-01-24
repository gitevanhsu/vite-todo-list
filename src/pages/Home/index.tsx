import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import memberInfo from "../../context/userContext";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import HomeImg from "/img.png";

export default function HomePage() {
  const { member } = useContext(memberInfo);
  const [isSignUp, setIsSignUp] = useState(false);
  const toggleIsSignUp = () => setIsSignUp((i) => !i);
  const navigate = useNavigate();

  useEffect(() => {
    if (member.isSign) {
      navigate("todo");
    } else {
      navigate("/");
    }
  }, [navigate, member]);
  return (
    <div className="relative min-h-screen pt-[50px] pb-[20px] my-home-bg flex flex-col justify-center">
      {member.isSign && <Header />}
      <main className="h-full flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col items-center">
          <Logo isBig />
          <img
            src={HomeImg}
            alt="Home"
            className="mt-[20px] hidden md:inline-block"
          />
        </div>
        <div className="w-[300px] flex flex-col lg:ml-[150px] md:ml-[50px] ml-0 mt-5 text-center md:text-left">
          {isSignUp ? <SignUp /> : <SignIn />}
          <button
            className="block w-[160px] h-[47px] mx-auto text-center"
            type="button"
            onClick={toggleIsSignUp}
          >
            {isSignUp ? "登入" : "註冊帳號"}
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
