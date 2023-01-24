import { useContext } from "react";
import { UserInfo } from "../../context/userContext";
import { inputTextType } from "../../types";
import { SubmitHandler } from "react-hook-form";
import Form from "../../components/Form";
import { emailSignUp } from "../../utils/firebaseFuns";

const signUpArray = ["email", "name", "password", "checkPassword"];

export default function SignUp() {
  const { setUser } = useContext(UserInfo);
  const onSignUp: SubmitHandler<inputTextType> = (data) => {
    const { name, email, password } = data;
    emailSignUp({ name, email, password });
  };
  return (
    <>
      <h1 className="font-bold text-2xl">註冊帳號</h1>
      <Form formData={signUpArray} submitHandler={onSignUp} isSignUp />
    </>
  );
}
