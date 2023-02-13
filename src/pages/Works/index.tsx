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
      <main className="flex justify-center items-center">
        <div className="w-[90%] h-[500px] my-home-bg border-4 text-center rounded-[10px] py-3 text-3xl overflow-auto">
          <div className="p-5 overflow-auto flex">
            <div className="w-[250px] min-h-[200px] mr-4 bg-white/70 rounded-[10px]">
              <h3 className="my-3 border-b-2 border-black/50">Title1</h3>
              <div className="m-2">
                <div className="w-full h-[50px] my-2 px-4 bg-amber-400 flex justify-between items-center rounded-[10px] text-xl group">
                  <p className="text-xl">Item1</p>
                  <div className="h-[30px] w-[30px] bg-red-500 flex justify-center items-center rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    &#10005;
                  </div>
                </div>
                <div className="w-full h-[50px] my-2 px-4 bg-amber-400 flex justify-between items-center rounded-[10px] text-xl group">
                  <p className="text-xl">Item1</p>
                  <div className="h-[30px] w-[30px] bg-red-500 flex justify-center items-center rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    &#10005;
                  </div>
                </div>
                <div className="w-full h-[80px] my-2 bg-black/30 flex justify-center items-center rounded-[10px] text-5xl cursor-pointer hover:bg-black/40 hover:scale-105 transition-transform">
                  &#43;
                </div>
              </div>
            </div>
            <div className="w-[250px] min-h-[200px] mr-4 bg-white/70 rounded-[10px]">
              <h3 className="my-3 border-b-2 border-black/50">Title2</h3>
              <div className="m-2">
                <div className="w-full h-[80px] bg-black/30 flex justify-center items-center rounded-[10px] text-5xl cursor-pointer hover:bg-black/40 hover:scale-105 transition-transform">
                  &#43;
                </div>
              </div>
            </div>
            <div className="w-[250px] h-[80px] mr-4 bg-black/30 flex justify-center items-center rounded-[10px] text-5xl cursor-pointer hover:bg-black/40 hover:scale-110 transition-transform">
              &#43;
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
