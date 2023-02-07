import { useState } from "react";

import EditModal from "./EditProfile";

export default function Modal({
  url,
  name,
  handleCloseModal,
}: {
  url: string;
  name: string;
  handleCloseModal: (e: React.SyntheticEvent<HTMLDivElement>) => void;
}) {
  const [isEdit, setIsEdit] = useState(false);
  const clickHandler = () => setIsEdit((e) => !e);

  return (
    <div
      className="absolute bg-black/20 inset-0 flex justify-center items-center cursor-default"
      onClick={handleCloseModal}
      onKeyDown={handleCloseModal}
      role="button"
      tabIndex={0}
    >
      {isEdit ? (
        <EditModal url={url} name={name} clickHandler={clickHandler} />
      ) : (
        <div className="w-[300px] h-[300px] flex flex-col justify-center items-center p-5 text-center bg-white rounded-[10px] ">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden box-border border-2 border-black/40">
            <img
              src={
                url || "https://cdn-icons-png.flaticon.com/512/847/847969.png"
              }
              alt="avatar"
            />
          </div>
          <h2 className="my-5 text-2xl">{name}</h2>
          <button
            type="button"
            className="bg-slate-300 py-1 px-5 rounded-[5px] hover:bg-slate-500 hover:text-white"
            onClick={clickHandler}
          >
            修改資料
          </button>
        </div>
      )}
    </div>
  );
}
