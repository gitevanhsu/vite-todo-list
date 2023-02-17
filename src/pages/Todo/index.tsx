import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TodoList from "../../components/TodoList";
import TabItem from "../../components/TabItem";
import RouterButton from "../../components/RouterButton";
import UserInfo from "../../context/userContext";
import { getTodo, upDateMemberTodoList } from "../../utils/firebaseFuns";
import InputHandler from "../../utils/inputHandler";
import { TodoProps } from "../../types";
import Plus from "/plus 1.png";

const tadList = ["全部", "待完成", "已完成"];

export default function TodoPage() {
  const { member } = useContext(UserInfo);
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState<TodoProps[]>([]);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    if (member.uid) {
      getTodo(member.uid).then((data) => setTodoList(data));
    }
  }, [member.uid]);

  const addTodoKeyBoard = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputValue.trim() === "") {
        Swal.fire({
          icon: "info",
          title: "請勿輸入空白。",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }
      const newTodoList = [
        ...todoList,
        { todo: inputValue, completed: false, id: crypto.randomUUID() },
      ];
      setTodoList(newTodoList);
      setInputValue("");
      upDateMemberTodoList(member.uid, newTodoList);
    }
  };

  const addTodoKeyMouse = () => {
    if (inputValue.trim() === "") {
      Swal.fire({
        icon: "info",
        title: "請勿輸入空白。",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    const newTodoList = [
      ...todoList,
      { todo: inputValue, completed: false, id: crypto.randomUUID() },
    ];
    setTodoList(newTodoList);
    setInputValue("");
    upDateMemberTodoList(member.uid, newTodoList);
  };

  const triggerCompleted = (id: string) => {
    const newTodoList = todoList.map((todoItem) => {
      if (todoItem.id === id) {
        return { ...todoItem, completed: !todoItem.completed };
      }
      return todoItem;
    });
    setTodoList(newTodoList);
    upDateMemberTodoList(member.uid, newTodoList);
  };

  const removeItem = (id: string) => {
    const newTodoList = todoList.filter((todoItem) => todoItem.id !== id);
    setTodoList(newTodoList);
    upDateMemberTodoList(member.uid, newTodoList);
  };

  const clearCompleted = () => {
    const newTodoList = todoList.filter((item) => !item.completed);
    setTodoList(newTodoList);
    upDateMemberTodoList(member.uid, newTodoList);
  };

  return (
    <div className="relative min-h-screen pt-[50px] pb-[20px] my-todo-bg flex flex-col justify-center">
      {member.isSign && <Header />}
      <RouterButton path="works" />
      <main className="flex flex-col justify-center items-center">
        <div className="relative flex items-center sm:w-[500px] w-[311px]">
          <input
            type="text"
            placeholder="請輸入待辦事項"
            className="rounded-[10px] px-[16px] py-[12px] w-full"
            value={inputValue}
            onChange={(e) => InputHandler(e, setInputValue)}
            onKeyPress={addTodoKeyBoard}
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
            <TodoList
              tab={tab}
              todoList={todoList}
              triggerCompleted={triggerCompleted}
              removeItem={removeItem}
            />
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
