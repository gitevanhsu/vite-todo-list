export default function WorkItem({
  id,
  name,
  handleItemDelete,
}: {
  id: string;
  name: string;
  handleItemDelete: (itemId: string) => void;
}) {
  return (
    <div className="w-full min-h-[50px] my-2 px-4 bg-amber-400 flex justify-between items-center rounded-[10px] text-xl group">
      <p className="text-xl overflow-x-auto no-scrollbar">{name}</p>
      <div
        className="h-[30px] w-[30px] ml-1 shrink-0 bg-red-500 flex justify-center items-center rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        role="button"
        tabIndex={0}
        onClick={() => handleItemDelete(id)}
        onKeyDown={(e) => {
          if (e.key !== "Enter") return;
          handleItemDelete(id);
        }}
      >
        &#10005;
      </div>
    </div>
  );
}
