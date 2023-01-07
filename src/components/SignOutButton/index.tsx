export default function SignOutButton({
  clickHandler,
}: {
  clickHandler: () => void;
}) {
  return (
    <button className="ml-5" onClick={clickHandler}>
      登出
    </button>
  );
}
