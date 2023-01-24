interface SignOutType {
  clickHandler: () => void;
}

export default function SignOutButton({ clickHandler }: SignOutType) {
  return (
    <button className="ml-5" onClick={clickHandler}>
      登出
    </button>
  );
}
