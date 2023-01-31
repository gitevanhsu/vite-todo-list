import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormType, inputCheckType, inputTextType } from "../../types";

const placeholder: inputTextType = {
  email: "請輸入Email",
  name: "請輸入您的暱稱",
  password: "請輸入密碼",
  checkPassword: "請再次輸入密碼",
  photo: "可選擇是否上傳照片",
};

const title: inputTextType = {
  email: "Email",
  name: "您的暱稱",
  password: "輸入密碼",
  checkPassword: "再次輸入密碼",
  photo: "可選擇是否上傳照片",
};

const inputPattern: inputCheckType = {
  email: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,
  name: /^[^ ]*$/,
  password: /^[^ ]*$/,
  checkPassword: /^[^ ]*$/,
};

const errorMessage: inputTextType = {
  email: "請輸入正確 email",
  name: "請勿輸入空白",
  password: "密碼至少6位數",
  checkPassword: "密碼至少6位數",
  photo: "",
};

export default function Form({ formData, submitHandler, isSignUp }: FormType) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState,
    formState: { errors },
  } = useForm<inputTextType>();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset(
        formData.reduce((obj, item) => {
          obj[item] = "";
          return obj;
        }, {} as inputTextType)
      );
    }
  }, [formData, formState, reset]);
  return (
    <form onSubmit={handleSubmit(submitHandler)} className="text-center">
      {formData.map((item) => (
        <div key={item} className="text-left my-[20px]">
          <p className="font-semibold text-sm mb-1">{title[item]}</p>
          <input
            type={
              item.toLowerCase().includes("password")
                ? "password"
                : item === "photo"
                ? "file"
                : "text"
            }
            placeholder={placeholder[item]}
            {...register(item, {
              required: {
                value: false,
                // value: item !== "photo" && true,
                message: errorMessage[item],
              },
              pattern: inputPattern[item],
              minLength: {
                value: item.includes("password") ? 6 : 1,
                message: "密碼至少6位數",
              },
              validate:
                item === "checkPassword"
                  ? (val: string) => {
                      if (watch("password") !== val) {
                        return "Your passwords do no match";
                      }
                      return undefined;
                    }
                  : undefined,
            })}
            className="w-full py-[12px] px-[16px] rounded-[10px]"
            autoComplete={item.includes("password") ? "on" : ""}
          />
          {errors[item]?.type === "required" && (
            <p className="text-red-600">{errorMessage[item]}</p>
          )}
          {errors[item]?.type === "pattern" && (
            <p className="text-red-600">{errorMessage[item]}</p>
          )}
          {errors[item]?.type === "minLength" && (
            <p className="text-red-600">密碼至少六位數</p>
          )}
          {errors[item]?.type === "validate" && (
            <p className="text-red-600">密碼不同</p>
          )}
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
