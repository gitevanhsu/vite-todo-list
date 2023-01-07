import Logo from "../Logo";
import SignOutButton from "../SignOutButton";

export default function Header() {
  const onSignOut = () => {};

  return (
    <header className="absolute top-0 w-full h-[50px] px-[20px] py-[10px] flex items-center justify-between">
      <Logo isBig={false} />
      <div className="flex">
        <div className="font-semibold hidden sm:block">王小明的代辦</div>
        <SignOutButton clickHandler={onSignOut} />
      </div>
    </header>
  );
}
