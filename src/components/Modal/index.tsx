export default function Modal({
  url,
  name,
  handleCloseModal,
}: {
  url: string;
  name: string;
  handleCloseModal: (e: React.SyntheticEvent<HTMLDivElement>) => void;
}) {
  return (
    <div
      className="absolute bg-black/20 inset-0 flex justify-center items-center cursor-default"
      onClick={handleCloseModal}
      onKeyDown={handleCloseModal}
      role="button"
      tabIndex={0}
    >
      <div className="w-[300px] h-[300px] flex flex-col justify-center items-center p-10 text-center bg-white rounded-[10px] ">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden box-border border-2 border-black/40">
          <img src={url} alt="avatar" />
        </div>
        <h2 className="my-5 text-2xl">{name}</h2>
        <button
          type="button"
          className="bg-slate-300 py-1 px-5 rounded-[5px] hover:bg-slate-500 hover:text-white"
        >
          修改資料
        </button>
      </div>
    </div>
  );
}
