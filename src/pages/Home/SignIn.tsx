import { useContext } from "react";
import { UserInfo } from "../../context/userContext";
import { inputTextType } from "../../types";
import { SubmitHandler } from "react-hook-form";
import Form from "../../components/Form";

const signInArray = ["email", "password"];

export default function SignIn() {
  const { setUser } = useContext(UserInfo);
  const onSignIn: SubmitHandler<inputTextType> = (data) => {
    console.log(data);
  };
  return (
    <>
      <h1 className="font-bold text-2xl">最實用的線上代辦事項服務</h1>
      <Form formData={signInArray} submitHandler={onSignIn} isSignUp={false} />
    </>
  );
}
