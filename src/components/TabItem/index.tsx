import { TabItemProps } from "../../types";

export default function TabItem({
  tabItem,
  currentTab,
  index,
  setTab,
}: TabItemProps) {
  return (
    <li
      aria-hidden="true"
      onClick={() => setTab(index)}
      className={`w-[33.33333%] text-center py-[15px] cursor-pointer ${
        currentTab ? "border-b-[2px] border-black" : "border-b text-gray-400"
      }`}
    >
      <p>{tabItem}</p>
    </li>
  );
}
