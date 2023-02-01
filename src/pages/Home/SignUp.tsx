import { SubmitHandler } from "react-hook-form";
import { inputTextType } from "../../types";
import Form from "../../components/Form";
import { emailSignUp, uploadImage } from "../../utils/firebaseFuns";

const signUpArray = ["email", "name", "password", "checkPassword", "photo"];

export default function SignUp() {
  const onSignUp: SubmitHandler<inputTextType> = async (data) => {
    const { name, email, password, photo } = data;
    const url = await uploadImage(email, photo[0]);
    emailSignUp({ name, email, password, url });
  };
  return (
    <>
      <h1 className="font-bold text-2xl">註冊帳號</h1>
      <Form formData={signUpArray} submitHandler={onSignUp} isSignUp />
    </>
  );
}
