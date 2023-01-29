import { TodoItemProps } from "../../types";
import Vector from "/vector-x.png";

export default function TodoItem({
  todo,
  completed,
  id,
  triggerCompleted,
  removeItem,
}: TodoItemProps) {
  return (
    <li className="flex items-center justify-between">
      <div
        className="py-[15px] border-b w-full overflow-auto"
        aria-hidden="true"
        onClick={() => triggerCompleted(id)}
      >
        <label htmlFor={todo} className="flex items-center cursor-pointer">
          <input
            id={id}
            readOnly
            type="checkbox"
            value="true"
            checked={completed}
            className="w-[20px] h-[20px] mr-[16px] cursor-pointer"
          />
          <span className={`${completed && "line-through"}`}>{todo}</span>
        </label>
      </div>
      <img
        aria-hidden="true"
        onClick={() => removeItem(id)}
        src={Vector}
        alt="x"
        className="w-[14px] h-[14px] mx-[17px] cursor-pointer"
      />
    </li>
  );
}
