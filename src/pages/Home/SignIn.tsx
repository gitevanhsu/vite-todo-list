import Form from "../../components/Form";
import { emailSignIn } from "../../utils/firebaseFuns";

const signInArray = ["email", "password"];

export default function SignIn() {
  return (
    <>
      <h1 className="font-bold text-2xl">最實用的線上代辦事項服務</h1>
      <Form
        formData={signInArray}
        submitHandler={emailSignIn}
        isSignUp={false}
      />
    </>
  );
}
