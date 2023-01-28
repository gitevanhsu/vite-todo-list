import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserInfo from "../../context/userContext";
import Plus from "/plus 1.png";
import { TodoProps } from "../../types";
import TodoList from "../../components/TodoList";
import { getTodo, upDateMemberTodoList } from "../../utils/firebaseFuns";
import TabItem from "../../components/TabItem";

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

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addTodoKeyBoard = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputValue.trim() === "") {
        alert("尚未輸入內容");
        return;
      }
      const newTodoList = [...todoList, { todo: inputValue, completed: false }];
      setTodoList(newTodoList);
      setInputValue("");
      upDateMemberTodoList(member.uid, newTodoList);
    }
  };

  const addTodoKeyMouse = () => {
    if (inputValue.trim() === "") {
      alert("尚未輸入內容");
      return;
    }
    const newTodoList = [...todoList, { todo: inputValue, completed: false }];
    setTodoList(newTodoList);
    setInputValue("");
    upDateMemberTodoList(member.uid, newTodoList);
  };

  const triggerCompleted = (item: string) => {
    const newTodoList = todoList.map((todoItem) => {
      if (todoItem.todo === item) {
        return { ...todoItem, completed: !todoItem.completed };
      }
      return todoItem;
    });
    setTodoList(newTodoList);
    upDateMemberTodoList(member.uid, newTodoList);
  };

  const removeItem = (item: string) => {
    const newTodoList = todoList.filter((todoItem) => todoItem.todo !== item);
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
      <main className="flex flex-col justify-center items-center">
        <div className="relative flex items-center sm:w-[500px] w-[311px]">
          <input
            type="text"
            placeholder="請輸入待辦事項"
            className="rounded-[10px] px-[16px] py-[12px] w-full"
            value={inputValue}
            onChange={inputHandler}
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
