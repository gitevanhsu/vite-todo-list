import { DroppableProvided } from "react-beautiful-dnd";
import trashCan from "/trash-can.png";

export default function TrashBox({
  dropProvided,
  isDragging,
}: {
  dropProvided: DroppableProvided;
  isDragging: boolean;
}) {
  return (
    <div
      ref={dropProvided.innerRef}
      {...dropProvided.droppableProps}
      className={`w-[50px] h-[50px] absolute bottom-5 left-5 rounded ${
        isDragging ? "hover:bg-red-900" : ""
      }`}
    >
      <img src={trashCan} alt="trash can" />
      {dropProvided.placeholder}
    </div>
  );
}
