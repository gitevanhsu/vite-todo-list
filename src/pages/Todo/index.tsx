import { useContext } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserInfo from "../../context/userContext";
import Plus from "/plus 1.png";
import Vector from "/vector-x.png";

export default function TodoPage() {
  const { member } = useContext(UserInfo);

  return (
    <div className="relative min-h-screen pt-[50px] pb-[20px] my-todo-bg flex flex-col justify-center">
      {member.isSign && <Header />}
      <main className="flex flex-col justify-center items-center">
        <div className="relative flex items-center sm:w-[500px] w-[311px]">
          <input
            type="text"
            placeholder="請輸入待辦事項"
            className="rounded-[10px] px-[16px] py-[12px] w-full"
          />
          <div className="absolute right-[4px]">
            <img src={Plus} alt="plus" className="cursor-pointer" />
          </div>
        </div>

        <div className="sm:w-[500px] w-[311px] bg-white rounded-[10px] shadow-md mt-[16px] text-gray-700 text-sm">
          <ul className="flex font-semibold">
            <li className="w-[33.33333%] text-center py-[15px] cursor-pointer border-b-[2px] border-black">
              <p>全部</p>
            </li>
            <li className="w-[33.33333%] text-center py-[15px] cursor-pointer border-b text-gray-400">
              <p>待完成</p>
            </li>
            <li className="w-[33.33333%] text-center py-[15px] cursor-pointer border-b text-gray-400">
              <p>已完成</p>
            </li>
          </ul>
          <div>
            <ul className="pl-[24px]">
              <li className="flex items-center justify-between ">
                <div className="py-[15px] border-b w-full">
                  <label
                    htmlFor="item1"
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      id="item1"
                      type="checkbox"
                      value="true"
                      className="w-[20px] h-[20px] mr-[16px] cursor-pointer"
                    />
                    <span>把冰箱發霉的檸檬拿去丟</span>
                  </label>
                </div>
                <img
                  src={Vector}
                  alt="x"
                  className="w-[14px] h-[14px] mx-[17px] cursor-pointer"
                />
              </li>
              <li className="flex items-center justify-between ">
                <div className="py-[15px] border-b w-full">
                  <label
                    htmlFor="item2"
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      id="item2"
                      type="checkbox"
                      value="true"
                      className="w-[20px] h-[20px] mr-[16px] cursor-pointer"
                      checked
                    />
                    <span className="line-through text-gray-400">
                      打電話叫媽媽匯款給我
                    </span>
                  </label>
                </div>
                <img
                  src={Vector}
                  alt="x"
                  className="w-[14px] h-[14px] mx-[17px] cursor-pointer"
                />
              </li>
              <li className="flex items-center justify-between ">
                <div className="py-[15px] border-b w-full">
                  <label
                    htmlFor="item3"
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      id="item3"
                      type="checkbox"
                      value="true"
                      className="w-[20px] h-[20px] mr-[16px] cursor-pointer"
                    />
                    <span>整理電腦資料夾</span>
                  </label>
                </div>
                <img
                  src={Vector}
                  alt="x"
                  className="w-[14px] h-[14px] mx-[17px] cursor-pointer"
                />
              </li>
              <li className="flex items-center justify-between ">
                <div className="py-[15px] border-b w-full">
                  <label
                    htmlFor="item4"
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      id="item4"
                      type="checkbox"
                      value="true"
                      className="w-[20px] h-[20px] mr-[16px] cursor-pointer"
                      checked
                    />
                    <span className="line-through text-gray-400">
                      繳電費水費瓦斯費
                    </span>
                  </label>
                </div>
                <img
                  src={Vector}
                  alt="x"
                  className="w-[14px] h-[14px] mx-[17px] cursor-pointer"
                />
              </li>
              <li className="flex items-center justify-between ">
                <div className="py-[15px] border-b w-full">
                  <label
                    htmlFor="item5"
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      id="item5"
                      type="checkbox"
                      value="true"
                      className="w-[20px] h-[20px] mr-[16px] cursor-pointer"
                    />
                    <span>約vicky禮拜三泡溫泉</span>
                  </label>
                </div>
                <img
                  src={Vector}
                  alt="x"
                  className="w-[14px] h-[14px] mx-[17px] cursor-pointer"
                />
              </li>
              <li className="flex items-center justify-between ">
                <div className="py-[15px] border-b w-full">
                  <label
                    htmlFor="item6"
                    className="flex items-center cursor-pointer"
                  >
                    <input
                      id="item6"
                      type="checkbox"
                      value="true"
                      className="w-[20px] h-[20px] mr-[16px] cursor-pointer"
                    />
                    <span>約ada禮拜四吃晚餐</span>
                  </label>
                </div>
                <img
                  src={Vector}
                  alt="x"
                  className="w-[14px] h-[14px] mx-[17px] cursor-pointer"
                />
              </li>
            </ul>
            <div className="flex items-center justify-between ml-[24px] mr-[48px] pt-[25px] pb-[32px]">
              <p> 5 個已完成項目</p>
              <p className="text-gray-400 cursor-pointer">清除已完成項目</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
