import { useContext, useRef, useState } from "react";

import memberInfo from "../../context/userContext";
import { updateMemberInfo } from "../../utils/firebaseFuns";
import { EditModalProps } from "../../types";
import save from "/save.png";

export default function EditModal({ url, name, clickHandler }: EditModalProps) {
  const { member, setMember } = useContext(memberInfo);

  const [value, setValue] = useState(name);
  const [userPhoto, setUserPhoto] = useState(url || save);
  const fileRef = useRef<HTMLInputElement>(null);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    if (e.target.files[0]) {
      setUserPhoto(URL.createObjectURL(e.target.files[0]));
    } else {
      setUserPhoto(save);
    }
  };

  const updateHandler = async () => {
    if (!fileRef.current) return;
    updateMemberInfo(member, fileRef.current, value, setMember, clickHandler);
  };

  return (
    <div className="w-[300px] h-[300px] flex flex-col justify-center items-center p-5 text-center bg-white rounded-[10px] ">
      <p className="my-2">點擊 / 拖曳預覽</p>
      <div className="w-[100px] h-[100px] rounded-full overflow-hidden box-border border-2 border-black/40">
        <label
          htmlFor="newFile"
          className="block relative bg-cover"
          style={{ backgroundImage: `url(${userPhoto})` }}
        >
          <input
            id="newFile"
            onChange={fileHandler}
            ref={fileRef}
            type="file"
            accept="image/*"
            className="opacity-0 w-[100px] h-[100px]"
          />
        </label>
      </div>
      <input
        type="text"
        value={value}
        onChange={inputHandler}
        className="p-2 my-2 border border-slate-500 rounded-[10px]"
      />
      <div className="flex">
        <button
          type="button"
          className="bg-amber-300 py-1 px-5 mr-3 rounded-[5px] hover:bg-orange-500 hover:text-white"
          onClick={updateHandler}
        >
          送出
        </button>
        <button
          type="button"
          className="bg-slate-300 py-1 px-5 rounded-[5px] hover:bg-slate-500 hover:text-white"
          onClick={clickHandler}
        >
          返回
        </button>
      </div>
    </div>
  );
}
