import { useContext } from "react";
import { SubmitHandler } from "react-hook-form";

import Form from "../../components/Form";
import { emailSignUp } from "../../utils/firebaseFuns";
import memberInfo from "../../context/userContext";
import { inputTextType } from "../../types";

const signUpArray = ["email", "name", "password", "checkPassword", "photo"];

export default function SignUp() {
  const { setMember } = useContext(memberInfo);
  const onSignUp: SubmitHandler<inputTextType> = async (data) => {
    const { name, email, password, photo } = data;
    emailSignUp({ name, email, password, photo }, setMember);
  };
  return (
    <>
      <h1 className="font-bold text-2xl">註冊帳號</h1>
      <Form formData={signUpArray} submitHandler={onSignUp} isSignUp />
    </>
  );
}
