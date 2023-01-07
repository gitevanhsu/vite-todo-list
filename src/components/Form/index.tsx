import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface PlaceholderType {
  [key: string]: string;
  email: string;
  name: string;
  password: string;
  checkPassword: string;
}
const placeholder: PlaceholderType = {
  email: "請輸入Email",
  name: "請輸入您的暱稱",
  password: "請輸入密碼",
  checkPassword: "請再次輸入密碼",
};

export interface TitleType {
  [key: string]: string;
  email: string;
  name: string;
  password: string;
  checkPassword: string;
}
const title: TitleType = {
  email: "Email",
  name: "您的暱稱",
  password: "輸入密碼",
  checkPassword: "再次輸入密碼",
};

interface FormType {
  formData: string[];
  submitHandler: (data: TitleType) => void;
  isSignUp: boolean;
}

export default function Form({ formData, submitHandler, isSignUp }: FormType) {
  const { register, handleSubmit, reset, formState } = useForm<TitleType>();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset(
        formData.reduce((obj, item) => {
          obj[item] = "";
          return obj;
        }, {} as TitleType)
      );
    }
  }, [formState, reset]);
  return (
    <form onSubmit={handleSubmit(submitHandler)} className="text-center">
      {formData.map((item) => (
        <div key={self + item} className="text-left my-[20px]">
          <p className="font-semibold text-sm mb-1">{title[item]}</p>
          <input
            type={item.includes("password") ? "password" : "text"}
            placeholder={placeholder[item]}
            {...register(item, { required: true })}
            className="w-full py-[12px] px-[16px] rounded-[10px]"
            autoComplete={item.includes("password") ? "on" : ""}
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-[160px] h-[47px] rounded-[10px] bg-stone-800 text-white text-center"
      >
        {isSignUp ? "註冊帳號" : "登入"}
      </button>
    </form>
  );
}
