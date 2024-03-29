import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

import useOnClickOutside from "../../utils/useClickOutside";
import InputHandler from "../../utils/inputHandler";
import { editItemName, removeItem } from "../../slice/workSlice";
import { WorkItemInterface } from "../../types";

export default function WorkItem({ itemDragProvided, workId, itemId, name }: WorkItemInterface) {
  const dispatch = useDispatch();
  const [isEditName, setIsEdit] = useState(false);
  const [value, setValue] = useState(name);
  const editRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(editRef, () => {
    setIsEdit(false);
    setValue(name);
  });

  const editItem = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      dispatch(editItemName({ workId, itemId, name: value }));
      setIsEdit(false);
    }
  };

  return (
    <div
      ref={itemDragProvided.innerRef}
      {...itemDragProvided.draggableProps}
      {...itemDragProvided.dragHandleProps}
      className="min-h-[50px] my-2 px-4 bg-amber-400 border-b-2 flex justify-between items-center rounded-[10px] text-xl group"
    >
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
            onChange={(e) => InputHandler(e, setValue)}
            onKeyPress={editItem}
          />
        )}
      </div>
      <div
        className="h-[30px] w-[30px] ml-1 shrink-0 bg-red-500 flex justify-center items-center rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        role="button"
        tabIndex={0}
        onClick={() => {
          Swal.fire({
            title: "確定要刪除項目嗎？",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "確定刪除",
            cancelButtonText: "取消",
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(removeItem({ workId, itemId }));
            }
          });
        }}
        onKeyDown={(e) => {
          if (e.key !== "Enter") return;
          dispatch(removeItem({ workId, itemId }));
        }}
      >
        &#10005;
      </div>
    </div>
  );
}
