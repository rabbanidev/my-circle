import { useEffect } from "react";

export default function useOutsideClick({
  ref,
  onFn,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
  onFn: () => void;
}) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onFn();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onFn, ref]);
}
