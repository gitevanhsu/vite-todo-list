import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { WorksInterface } from "../../types";
import useOnClickOutside from "../../utils/useClickOutside";
import WorkItem from "../WorkItem";
import InputHandler from "../../utils/inputHandler";
import { editWorkTitle, addNewItem } from "../../slice/workSlice";

export default function Work({ workId, title, items }: WorksInterface) {
  const dispatch = useDispatch();
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

  const addItem = (e: React.KeyboardEvent) => {
    if (e.code === "Enter") {
      if (!itemValue.trim()) {
        alert("請勿留空");
        return;
      }
      dispatch(addNewItem({ workId, name: itemValue }));
      setIsAdding(false);
      setItemValue("");
    }
  };

  const editTitle = (e: React.KeyboardEvent) => {
    if (e.code === "Enter") {
      if (!titleValue.trim()) {
        alert("請勿留空");
        return;
      }
      dispatch(editWorkTitle({ workId, title: titleValue }));
      setIsEditTitle(false);
    }
  };
  return (
    <div className="w-[250px] h-fit mr-4 bg-white/70 rounded-[10px] shrink-0">
      <div
        ref={titleRef}
        className="my-3 border-b-2 border-black/50 relative flex justify-center items-center cursor-pointer"
        onClick={() => setIsEditTitle(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter") setIsEditTitle(true);
        }}
      >
        <h3 className="overflow-x-auto no-scrollbar px-4 whitespace-nowrap">
          {title}
        </h3>
        {isEditTitle && (
          <input
            type="text"
            value={titleValue}
            className="absolute w-[90%] rounded px-4 mb-2"
            onChange={(e) => InputHandler(e, setTitleValue)}
            onKeyPress={editTitle}
          />
        )}
      </div>
      <div className="m-2">
        {items &&
          items.map((item) => (
            <WorkItem
              key={item.id}
              workId={workId}
              itemId={item.id}
              name={item.name}
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
              onChange={(e) => InputHandler(e, setItemValue)}
              onKeyPress={addItem}
            />
          )}
          <p className="text-5xl">&#43;</p>
        </div>
      </div>
    </div>
  );
}
