import { useContext, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DraggableProvided,
} from "react-beautiful-dnd";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserInfo from "../../context/userContext";

import RouterButton from "../../components/RouterButton";
import useOnClickOutside from "../../utils/useClickOutside";
import Work from "../../components/Works";
import InputHandler from "../../utils/inputHandler";
import { StoreInterface } from "../../types";
import { addNewWork, fetchWorkList, dndAction } from "../../slice/workSlice";
import { AppDispatch } from "../../store";
import { syncWork } from "../../utils/firebaseFuns";
import TrashBox from "../../components/TrashBox";

let FirstRender = true;

export default function WorkPage() {
  const { member } = useContext(UserInfo);
  const { works, fetchStatus, isFirstRender } = useSelector(
    (state) => state
  ) as StoreInterface;
  const dispatch = useDispatch<AppDispatch>();
  const [value, setValue] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const addRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (fetchStatus === "idle") {
      dispatch(fetchWorkList(member.uid));
    }
  }, [dispatch, fetchStatus, member.uid]);

  useEffect(() => {
    if (FirstRender) {
      FirstRender = false;
      return;
    }
    if (isFirstRender) return;
    syncWork(member.uid, works);
  }, [dispatch, isFirstRender, member.uid, works]);

  useOnClickOutside(addRef, () => {
    setIsAdding(false);
    setValue("");
  });

  const onKeyDownHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (!value.trim()) {
        alert("請勿留空");
        return;
      }
      dispatch(addNewWork({ title: value }));
      setValue("");
      setIsAdding(false);
    }
  };

  return (
    <div className="relative min-h-screen pt-[50px] pb-[20px] my-todo-bg flex flex-col justify-center">
      {member.isSign && <Header />}
      <RouterButton path="todo" />
      <main className="flex justify-center items-center">
        <div className="w-[90%] h-[500px] my-home-bg border-4 text-center rounded-[10px] py-3 text-3xl overflow-auto no-scrollbar relative">
          <DragDropContext
            onDragEnd={(event) => {
              dispatch(dndAction({ works, event }));
              setIsDragging(false);
            }}
            onDragStart={() => setIsDragging(true)}
          >
            <Droppable droppableId="trash" direction="horizontal" type="work">
              {(provided) => (
                <TrashBox isDragging={isDragging} dropProvided={provided} />
              )}
            </Droppable>
            <Droppable droppableId="works" direction="horizontal" type="work">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="p-5 flex"
                >
                  {works &&
                    works.map((work, index) => (
                      <Draggable
                        key={work.id}
                        draggableId={work.id}
                        index={index}
                      >
                        {(dragProvided: DraggableProvided) => (
                          <Work
                            dragProvided={dragProvided}
                            workId={work.id}
                            title={work.title}
                            items={work.items}
                          />
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
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
                        onChange={(e) => InputHandler(e, setValue)}
                        onKeyPress={onKeyDownHandler}
                      />
                    )}
                    <p className="text-5xl">&#43;</p>
                  </div>
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </main>
      <Footer />
    </div>
  );
}
