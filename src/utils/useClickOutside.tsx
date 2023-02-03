import { RefObject, useEffect } from "react";

export default function useOnClickOutside(
  ref: RefObject<HTMLDivElement>,
  handler: React.Dispatch<React.SetStateAction<boolean>>
) {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler(false);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
