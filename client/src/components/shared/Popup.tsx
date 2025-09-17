import { useRef, type ReactNode } from "react";
import { useOutsideClick } from "../../hooks";

interface PopupProps {
  open: boolean;
  children: ReactNode;
  button: ReactNode;
  position?: string;
  onClose: () => void;
}

export default function Popup({
  open,
  onClose,
  button,
  position = "left-0",
  children,
}: PopupProps) {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick({
    ref,
    onFn: onClose,
  });

  return (
    <div className="relative inline-block">
      {button}
      {open && (
        <div
          ref={ref}
          className={`absolute bottom-full mb-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg w-66 z-50 p-2 ${position}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
