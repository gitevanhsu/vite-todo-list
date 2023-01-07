import { useState } from "react";
import Logo from "../../components/Logo";
// import Form from "../../components/Form";
import HomeImg from "/img.png";

const signUpArray = ["email", "name", "password", "checkPassword"];
const signInArray = ["email", "password"];

interface placeholderType {
  [key: string]: string;
  email: string;
  name: string;
  password: string;
  checkPassword: string;
}
const placeholder: placeholderType = {
  email: "請輸入Email",
  name: "請輸入您的暱稱",
  password: "請輸入密碼",
  checkPassword: "請再次輸入密碼",
};

interface titleType {
  [key: string]: string;
  email: string;
  name: string;
  password: string;
  checkPassword: string;
}
const title: titleType = {
  email: "Email",
  name: "您的暱稱",
  password: "輸入密碼",
  checkPassword: "再次輸入密碼",
};

function Form({ formData }: { formData: string[] }) {
  return (
    <div>
      {formData.map((item, _, self) => (
        <div key={self + item} className="text-left my-[20px]">
          <label>
            <p className="font-semibold text-sm mb-1">{title[item]}</p>
            <input
              type={item.includes("password") ? "password" : "text"}
              placeholder={placeholder[item]}
              className="w-full py-[12px] px-[16px] rounded-[10px]"
            />
          </label>
        </div>
      ))}
    </div>
  );
}

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
    <main className="h-full flex items-center justify-center">
      <div className="flex flex-col	items-center">
        <Logo isBig={true} />
        <img src={HomeImg} alt="Home image" className="mt-[20px]" />
      </div>
      <div className="w-[300px] ml-[150px] flex flex-col">
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
