import { TodoListProps } from "../../types";
import TodoItem from "../TodoItem";

export default function TodoList({
  tab,
  todoList,
  triggerCompleted,
  removeItem,
}: TodoListProps) {
  let newTodoList = [];
  if (tab === 1) {
    newTodoList = todoList.filter((item) => !item.completed);
  } else if (tab === 2) {
    newTodoList = todoList.filter((item) => item.completed);
  } else {
    newTodoList = todoList;
  }
  return (
    <ul className="pl-[24px] min-h-[300px] max-h-[300px] overflow-auto">
      {newTodoList.length > 0 ? (
        newTodoList.map((item) => {
          const { todo, completed, id } = item;
          return (
            <TodoItem
              key={id}
              id={id}
              todo={todo}
              completed={completed}
              triggerCompleted={triggerCompleted}
              removeItem={removeItem}
            />
          );
        })
      ) : (
        <li className="flex items-center justify-between">
          <div className="py-[15px] border-b w-full font-bold">
            此欄位無項目
          </div>
        </li>
      )}
    </ul>
  );
}
