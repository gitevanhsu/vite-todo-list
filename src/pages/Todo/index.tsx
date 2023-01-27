import { useContext, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserInfo from "../../context/userContext";
import Plus from "/plus 1.png";
import Vector from "/vector-x.png";

const data = [
  {
    todo: "把冰箱發霉的檸檬拿去丟",
    completed: false,
  },
  {
    todo: "打電話叫媽媽匯款給我",
    completed: true,
  },
  {
    todo: "整理電腦資料夾",
    completed: false,
  },
  {
    todo: "繳電費水費瓦斯費",
    completed: true,
  },
  {
    todo: "約vicky禮拜三泡溫泉",
    completed: false,
  },
  {
    todo: "約ada禮拜四吃晚餐",
    completed: false,
  },
];

export default function TodoPage() {
  const { member } = useContext(UserInfo);
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState(data);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTodoKeyBoard = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTodoList((t) => [...t, { todo: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const addTodoKeyMouse = () => {
    setTodoList((t) => [...t, { todo: inputValue, completed: false }]);
    setInputValue("");
  };

  const triggerCompleted = (index: number) => {
    const newTodo = [...todoList];
    newTodo[index].completed = !newTodo[index].completed;
    setTodoList(newTodo);
  };

  const clearCompleted = () => {
    setTodoList((c) => c.filter((item) => !item.completed));
  };

  return (
    <div className="relative min-h-screen pt-[50px] pb-[20px] my-todo-bg flex flex-col justify-center">
      {member.isSign && <Header />}
      <main className="flex flex-col justify-center items-center">
        <div className="relative flex items-center sm:w-[500px] w-[311px]">
          <input
            type="text"
            placeholder="請輸入待辦事項"
            className="rounded-[10px] px-[16px] py-[12px] w-full"
            value={inputValue}
            onChange={inputHandler}
            onKeyDown={addTodoKeyBoard}
          />
          <div
            aria-hidden="true"
            onClick={addTodoKeyMouse}
            className="absolute right-[4px]"
          >
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
              {todoList.map((item, index) => {
                const { todo, completed } = item;
                return (
                  <li key={todo} className="flex items-center justify-between">
                    <div className="py-[15px] border-b w-full">
                      <label
                        htmlFor={todo}
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          readOnly
                          id={todo}
                          type="checkbox"
                          value="true"
                          checked={completed}
                          className="w-[20px] h-[20px] mr-[16px] cursor-pointer"
                          onClick={() => triggerCompleted(index)}
                        />
                        <span>{todo}</span>
                      </label>
                    </div>
                    <img
                      src={Vector}
                      alt="x"
                      className="w-[14px] h-[14px] mx-[17px] cursor-pointer"
                    />
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center justify-between ml-[24px] mr-[48px] pt-[25px] pb-[32px]">
              <p>
                {todoList.filter((item) => item.completed).length}
                個已完成項目
              </p>
              <button
                onClick={clearCompleted}
                type="button"
                className="text-gray-400 cursor-pointer"
              >
                清除已完成項目
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
