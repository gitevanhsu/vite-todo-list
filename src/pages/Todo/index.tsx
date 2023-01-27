import { useContext, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserInfo from "../../context/userContext";
import Plus from "/plus 1.png";
import { TabItemProps, TodoProps } from "../../types";
import TodoList from "../../components/TodoList";

const tadList = ["全部", "待完成", "已完成"];

function TabItem({ tabItem, currentTab, index, setTab }: TabItemProps) {
  return (
    <li
      aria-hidden="true"
      onClick={() => setTab(index)}
      className={`w-[33.33333%] text-center py-[15px] cursor-pointer ${
        currentTab ? "border-b-[2px] border-black" : "border-b text-gray-400"
      }`}
    >
      <p>{tabItem}</p>
    </li>
  );
}

export default function TodoPage() {
  const { member } = useContext(UserInfo);
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState<TodoProps[]>([]);
  const [tab, setTab] = useState(0);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTodoKeyBoard = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputValue.trim() === "") {
        alert("尚未輸入內容");
        return;
      }
      setTodoList((t) => [...t, { todo: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const addTodoKeyMouse = () => {
    if (inputValue.trim() === "") {
      alert("尚未輸入內容");
      return;
    }
    setTodoList((t) => [...t, { todo: inputValue, completed: false }]);
    setInputValue("");
  };

  const triggerCompleted = (item: string) => {
    setTodoList((t) =>
      t.map((todoItem) => {
        if (todoItem.todo === item) {
          return { ...todoItem, completed: !todoItem.completed };
        }
        return todoItem;
      })
    );
  };

  const removeItem = (item: string) => {
    setTodoList((t) => t.filter((todoItem) => todoItem.todo !== item));
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
            {tadList.map((tabItem, index) => (
              <TabItem
                key={tabItem}
                tabItem={tabItem}
                currentTab={tab === index}
                index={index}
                setTab={setTab}
              />
            ))}
          </ul>
          <div>
            <ul className="pl-[24px]">
              <TodoList
                tab={tab}
                todoList={todoList}
                triggerCompleted={triggerCompleted}
                removeItem={removeItem}
              />
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
