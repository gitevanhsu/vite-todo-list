import { useContext, useRef, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserInfo from "../../context/userContext";

import RouterButton from "../../components/RouterButton";
import useOnClickOutside from "../../utils/useClickOutside";
import Work from "../../components/Works";

const sample = [
  {
    id: crypto.randomUUID(),
    title: "Title1",
    items: [{ id: crypto.randomUUID(), name: "item1" }],
  },
  {
    id: crypto.randomUUID(),
    title: "Title2",
    items: [{ id: crypto.randomUUID(), name: "item1" }],
  },
];

export default function TodoPage() {
  const { member } = useContext(UserInfo);
  const [works, setWorks] = useState(sample);
  const [value, setValue] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const addRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(addRef, () => {
    setIsAdding(false);
    setValue("");
  });

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (!value.trim()) {
        alert("請勿留空");
        return;
      }
      setWorks((w) => [
        ...w,
        { id: crypto.randomUUID(), title: value, items: [] },
      ]);
      setValue("");
      setIsAdding(false);
    }
  };

  const addNewItemHandler = (id: string, name: string) => {
    setWorks((w) =>
      w.map((work) => {
        if (work.id === id) {
          return {
            ...work,
            items: [...work.items, { id: crypto.randomUUID(), name }],
          };
        }
        return work;
      })
    );
  };

  const editWorkTitle = (workId: string, title: string) => {
    setWorks((w) =>
      w.map((work) => {
        if (work.id === workId) {
          return {
            ...work,
            title,
          };
        }
        return work;
      })
    );
  };

  const editItemName = (workId: string, itemId: string, name: string) => {
    setWorks((w) =>
      w.map((work) => {
        if (work.id === workId) {
          return {
            ...work,
            items: work.items.map((item) => {
              if (item.id === itemId) {
                return { ...item, name };
              }
              return item;
            }),
          };
        }
        return work;
      })
    );
  };

  const removeItem = (workId: string, itemId: string) => {
    setWorks((w) =>
      w.map((work) => {
        if (work.id === workId) {
          return {
            ...work,
            items: work.items.filter((item) => item.id !== itemId),
          };
        }
        return work;
      })
    );
  };

  return (
    <div className="relative min-h-screen pt-[50px] pb-[20px] my-todo-bg flex flex-col justify-center">
      {member.isSign && <Header />}
      <RouterButton path="todo" />
      <main className="flex justify-center items-center">
        <div className="w-[90%] min-h-[500px] my-home-bg border-4 text-center rounded-[10px] py-3 text-3xl overflow-auto">
          <div className="p-5 flex">
            {works &&
              works.map((work) => (
                <Work
                  key={work.id}
                  id={work.id}
                  title={work.title}
                  items={work.items}
                  addNewItemHandler={addNewItemHandler}
                  removeItem={removeItem}
                  editWorkTitle={editWorkTitle}
                  editItemName={editItemName}
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
                  onChange={inputHandler}
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
