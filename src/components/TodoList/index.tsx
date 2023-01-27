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
    <div>
      {newTodoList?.map((item) => {
        const { todo, completed } = item;
        return (
          <TodoItem
            key={todo}
            todo={todo}
            completed={completed}
            triggerCompleted={triggerCompleted}
            removeItem={removeItem}
          />
        );
      })}
    </div>
  );
}
