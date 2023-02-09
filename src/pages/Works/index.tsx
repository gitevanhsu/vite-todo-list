import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserInfo from "../../context/userContext";

import RouterButton from "../../components/RouterButton";

export default function TodoPage() {
  const { member } = useContext(UserInfo);

  return (
    <div className="relative min-h-screen pt-[50px] pb-[20px] my-todo-bg flex flex-col justify-center">
      {member.isSign && <Header />}
      <RouterButton path="todo" />
      <main className="flex flex-col justify-center items-center">
        Works Page
      </main>
      <Footer />
    </div>
  );
}
