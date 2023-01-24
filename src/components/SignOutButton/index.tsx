import { SignOutType } from "../../types";

export default function SignOutButton({ clickHandler }: SignOutType) {
  return (
    <button className="ml-5" type="button" onClick={clickHandler}>
      登出
    </button>
  );
}
