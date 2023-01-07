import { useState } from "react";
import Logo from "../../components/Logo";
import Form from "../../components/Form";
import HomeImg from "/img.png";

const signUpArray = ["email", "name", "password", "checkPassword"];
const signInArray = ["email", "password"];

export function SignIn() {
  return (
    <>
      <h1 className="font-bold text-2xl">最實用的線上代辦事項服務</h1>
      <Form formData={signInArray} />
      <button className="w-[160px] h-[47px] mx-auto rounded-[10px] bg-stone-800 text-white text-center">
        登入
      </button>
    </>
  );
}

export function SignUp() {
  return (
    <>
      <h1 className="font-bold text-2xl">註冊帳號</h1>
      <Form formData={signUpArray} />
      <button className="w-[160px] h-[47px] rounded-[10px] bg-stone-800 text-white	 mx-auto text-center">
        註冊帳號
      </button>
    </>
  );
}

export default function HomePage() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleIsSignUp = () => setIsSignUp((i) => !i);

  return (
    <main className="h-full flex flex-col md:flex-row items-center justify-center">
      <div className="flex flex-col	items-center">
        <Logo isBig={true} />
        <img
          src={HomeImg}
          alt="Home image"
          className="mt-[20px] hidden md:inline-block"
        />
      </div>
      <div className="w-[300px] flex flex-col lg:ml-[150px] md:ml-[50px] ml-0 mt-5 text-center md:text-left">
        {isSignUp ? <SignUp /> : <SignIn />}
        <button
          className="block w-[160px] h-[47px] mx-auto text-center"
          onClick={toggleIsSignUp}
        >
          {isSignUp ? "登入" : "註冊帳號"}
        </button>
      </div>
    </main>
  );
}
