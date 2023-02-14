import { useRef, useState } from "react";
import { WorkItemInterface } from "../../types";
import useOnClickOutside from "../../utils/useClickOutside";

export default function WorkItem({
  workId,
  itemId,
  name,
  handleItemDelete,
  editItemName,
}: WorkItemInterface) {
  const [isEditName, setIsEdit] = useState(false);
  const [value, setValue] = useState(name);
  const editRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(editRef, () => {
    setIsEdit(false);
    setValue(name);
  });
  const itemInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const editItem = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      editItemName(workId, itemId, value);
      setIsEdit(false);
    }
  };

  return (
    <div className="min-h-[50px] my-2 px-4 bg-amber-400 border-b-2 flex justify-between items-center rounded-[10px] text-xl group">
      <div
        ref={editRef}
        className="w-full overflow-x-auto no-scrollbar my-3 border-black/50 relative flex items-center cursor-pointer"
        role="button"
        tabIndex={0}
        onClick={() => setIsEdit(true)}
        onKeyDown={() => setIsEdit(true)}
      >
        <p className="text-xl">{name}</p>
        {isEditName && (
          <input
            type="text"
            value={value}
            className="absolute w-[100%] rounded px-2"
            onChange={itemInputHandler}
            onKeyPress={editItem}
          />
        )}
      </div>
      <div
        className="h-[30px] w-[30px] ml-1 shrink-0 bg-red-500 flex justify-center items-center rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        role="button"
        tabIndex={0}
        onClick={() => handleItemDelete(itemId)}
        onKeyDown={(e) => {
          if (e.key !== "Enter") return;
          handleItemDelete(itemId);
        }}
      >
        &#10005;
      </div>
    </div>
  );
}
