import { useContext } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { UserInfo } from "../../context/userContext";

export default function TodoPage() {
  const { user } = useContext(UserInfo);

  return (
    <div className="relative min-h-screen pt-[50px] pb-[20px] my-home-bg flex flex-col justify-center">
      {user.isSign && <Header />}
      <main>Todo</main>
      <Footer />
    </div>
  );
}
