import { useState, useRef } from "react";
import { WorksInterface } from "../../types";
import useOnClickOutside from "../../utils/useClickOutside";
import WorkItem from "../WorkItem";

export default function Work({
  id,
  title,
  items,
  addNewItemHandler,
  removeItem,
  editWorkTitle,
}: WorksInterface) {
  const [isAdding, setIsAdding] = useState(false);
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [itemValue, setItemValue] = useState("");
  const [titleValue, setTitleValue] = useState(title);
  const titleRef = useRef<HTMLDivElement>(null);
  const addRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(addRef, () => {
    setIsAdding(false);
    setItemValue("");
  });
  useOnClickOutside(titleRef, () => {
    setIsEditTitle(false);
    setTitleValue(title);
  });
  const itemInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemValue(e.target.value);
  };
  const itemTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  const addNewItem = (e: React.KeyboardEvent) => {
    if (e.code === "Enter") {
      if (!itemValue.trim()) {
        alert("請勿留空");
        return;
      }
      addNewItemHandler(id, itemValue);
      setIsAdding(false);
      setItemValue("");
    }
  };

  const deleteItemHandler = (ItemId: string) => {
    removeItem(id, ItemId);
  };

  const editTitle = (e: React.KeyboardEvent) => {
    if (e.code === "Enter") {
      if (!titleValue.trim()) {
        alert("請勿留空");
        return;
      }
      editWorkTitle(id, titleValue);
      setIsEditTitle(false);
    }
  };
  return (
    <div className="w-[250px] h-fit mr-4 bg-white/70 rounded-[10px] shrink-0">
      <div
        ref={titleRef}
        className="my-3 border-b-2 border-black/50 relative flex justify-center items-center cursor-pointer "
        onClick={() => setIsEditTitle(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") setIsEditTitle(true);
        }}
      >
        <h3>{title}</h3>
        {isEditTitle && (
          <input
            type="text"
            value={titleValue}
            className="absolute w-[90%] rounded px-4 mb-2"
            onChange={itemTitleHandler}
            onKeyPress={editTitle}
          />
        )}
      </div>
      <div className="m-2">
        {items &&
          items.map((item) => (
            <WorkItem
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
              value={itemValue}
              onChange={itemInputHandler}
              onKeyPress={addNewItem}
            />
          )}
          <p className="text-5xl">&#43;</p>
        </div>
      </div>
    </div>
  );
}
