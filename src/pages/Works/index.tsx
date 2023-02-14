import { useContext, useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserInfo from "../../context/userContext";

import RouterButton from "../../components/RouterButton";
import { WorksInterface } from "../../types";
import useOnClickOutside from "../../utils/useClickOutside";

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

function Item({
  id,
  name,
  handleItemDelete,
}: {
  id: string;
  name: string;
  handleItemDelete: (itemId: string) => void;
}) {
  return (
    <div className="w-full min-h-[50px] my-2 px-4 bg-amber-400 flex justify-between items-center rounded-[10px] text-xl group">
      <p className="text-xl overflow-x-auto no-scrollbar">{name}</p>
      <div
        className="h-[30px] w-[30px] ml-1 shrink-0 bg-red-500 flex justify-center items-center rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        role="button"
        tabIndex={0}
        onClick={() => handleItemDelete(id)}
        onKeyDown={(e) => {
          if (e.key !== "Enter") return;
          handleItemDelete(id);
        }}
      >
        &#10005;
      </div>
    </div>
  );
}

function Work({
  id,
  title,
  items,
  addNewItemHandler,
  removeItem,
}: WorksInterface) {
  const [isAdding, setIsAdding] = useState(false);
  const [value, setValue] = useState("");
  const addRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(addRef, () => {
    setIsAdding(false);
    setValue("");
  });
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const addNewItem = (e: React.KeyboardEvent) => {
    if (e.code === "Enter") {
      if (!value.trim()) {
        alert("請勿留空");
        return;
      }
      addNewItemHandler(id, value);
      setIsAdding(false);
      setValue("");
    }
  };

  const deleteItemHandler = (ItemId: string) => {
    removeItem(id, ItemId);
  };

  return (
    <div className="w-[250px] h-fit mr-4 bg-white/70 rounded-[10px] shrink-0">
      <h3 className="my-3 border-b-2 border-black/50">{title}</h3>
      <div className="m-2">
        {items &&
          items.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              handleItemDelete={deleteItemHandler}
            />
          ))}
        <div
          className="w-full h-[80px] bg-black/30 relative flex justify-center items-center rounded-[10px] text-5xl cursor-pointer hover:bg-black/40 hover:scale-105 transition-transform"
          role="button"
          ref={addRef}
          tabIndex={0}
          onClick={() => setIsAdding(true)}
          onKeyDown={(e) => {
            if (e.key !== "Enter") return;
            setIsAdding(true);
          }}
        >
          {isAdding && (
            <input
              type="text"
              className="w-[90%] text-base p-2 absolute rounded"
              value={value}
              onChange={inputHandler}
              onKeyPress={addNewItem}
            />
          )}
          <p className="text-5xl">&#43;</p>
        </div>
      </div>
    </div>
  );
}

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
