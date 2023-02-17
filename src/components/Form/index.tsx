import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { FormType, InputItem, inputTextType } from "../../types";

const itemDetail: InputItem = {
  email: {
    title: "請輸入Email",
    verify:
      /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,
    error: "請輸入正確 email",
    type: "text",
    accept: "",
    placeHolder: "請輸入Email",
    require: true,
    minLength: 1,
  },
  name: {
    title: "請輸入您的暱稱",
    verify: /^[^ ]*$/,
    error: "請勿輸入空白",
    type: "text",
    accept: "",
    placeHolder: "請輸入您的暱稱",
    require: true,
    minLength: 1,
  },
  password: {
    title: "請輸入密碼",
    verify: /^[^ ]*$/,
    error: "密碼至少6位數",
    type: "password",
    accept: "",
    placeHolder: "請輸入密碼",
    require: true,
    minLength: 6,
  },
  checkPassword: {
    title: "請再次輸入密碼",
    verify: /^[^ ]*$/,
    error: "密碼至少6位數",
    type: "password",
    accept: "",
    placeHolder: "請輸入密碼",
    require: true,
    minLength: 6,
  },
  photo: {
    title: "可選擇是否上傳照片",
    verify: /./,
    error: "",
    type: "file",
    accept: "image/*",
    placeHolder: "",
    require: false,
    minLength: 1,
  },
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
  const [userPhoto, setUserPhoto] = useState("");

  useEffect(
    () => () => {
      if (formState.isSubmitSuccessful) {
        reset(
          formData.reduce((obj, item) => {
            obj[item] = "";
            return obj;
          }, {} as inputTextType)
        );
      }
    },
    [formData, formState, reset]
  );

  const getUserPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    if (e.target.files[0]) {
      setUserPhoto(URL.createObjectURL(e.target.files[0]));
    } else {
      setUserPhoto("");
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="text-center">
      {formData.map((item) => (
        <div key={item} className="text-left my-[20px]">
          <p className="font-semibold text-sm mb-1">{itemDetail[item].title}</p>
          <input
            accept={itemDetail[item].accept}
            type={itemDetail[item].type}
            placeholder={itemDetail[item].placeHolder}
            {...register(item, {
              required: {
                value: itemDetail[item].require,
                message: itemDetail[item].error,
              },
              pattern: itemDetail[item].verify,
              minLength: {
                value: itemDetail[item].minLength,
                message: "密碼至少6位數",
              },
              validate:
                item === "checkPassword"
                  ? (val: string | File[]) => {
                      if (watch("password") !== val) {
                        return "Your passwords do no match";
                      }
                      return undefined;
                    }
                  : undefined,
            })}
            className="w-full py-[12px] px-[16px] rounded-[10px]"
            autoComplete={item.includes("password") ? "on" : ""}
            onChange={item === "photo" ? getUserPhoto : () => undefined}
          />

          {errors[item]?.type === "required" && (
            <p className="text-red-600">{itemDetail[item].error}</p>
          )}
          {errors[item]?.type === "pattern" && (
            <p className="text-red-600">{itemDetail[item].error}</p>
          )}
          {errors[item]?.type === "minLength" && (
            <p className="text-red-600">密碼至少六位數</p>
          )}
          {errors[item]?.type === "validate" && (
            <p className="text-red-600">密碼不同</p>
          )}
        </div>
      ))}
      {userPhoto && (
        <img
          src={userPhoto}
          alt="upload-file"
          className="max-w-[100px] max-h-[100px] pb-[12px] mt-[-20px]"
        />
      )}
      <button
        type="submit"
        className="w-[160px] h-[47px] rounded-[10px] bg-stone-800 text-white text-center"
      >
        {isSignUp ? "註冊帳號" : "登入"}
      </button>
    </form>
  );
}
