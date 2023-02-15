import { useContext, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserInfo from "../../context/userContext";

import RouterButton from "../../components/RouterButton";
import useOnClickOutside from "../../utils/useClickOutside";
import Work from "../../components/Works";
import InputHandler from "../../utils/inputHandler";
import { WorksType } from "../../types";
import { addNewWork } from "../../slice/workSlice";

export default function TodoPage() {
  const { member } = useContext(UserInfo);
  const works = useSelector((state) => state) as WorksType[];
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const addRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(addRef, () => {
    setIsAdding(false);
    setValue("");
  });

  const onKeyDownHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (!value.trim()) {
        alert("請勿留空");
        return;
      }
      dispatch(addNewWork({ title: value }));
      setValue("");
      setIsAdding(false);
    }
  };

  return (
    <div className="relative min-h-screen pt-[50px] pb-[20px] my-todo-bg flex flex-col justify-center">
      {member.isSign && <Header />}
      <RouterButton path="todo" />
      <main className="flex justify-center items-center">
        <div className="w-[90%] h-[500px] my-home-bg border-4 text-center rounded-[10px] py-3 text-3xl overflow-auto no-scrollbar">
          <div className="p-5 flex">
            {works &&
              works.map((work) => (
                <Work
                  key={work.id}
                  workId={work.id}
                  title={work.title}
                  items={work.items}
                />
              ))}
            <div
              className="w-[250px] h-[100px] mr-4 py-2 bg-black/30 rounded-[10px] relative flex justify-center items-center cursor-pointer shrink-0 hover:bg-black/40 hover:scale-110 transition-transform"
              ref={addRef}
              role="button"
              tabIndex={0}
              onKeyDown={() => setIsAdding(true)}
              onClick={() => setIsAdding(true)}
            >
              {isAdding && (
                <input
                  type="text"
                  className="w-[90%] text-base p-2 absolute rounded"
                  value={value}
                  onChange={(e) => InputHandler(e, setValue)}
                  onKeyPress={onKeyDownHandler}
                />
              )}
              <p className="text-5xl">&#43;</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
