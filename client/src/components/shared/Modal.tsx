import { useEffect, type ReactNode } from "react";
import Portal from "../../Portal";
import { CloseButton } from "../ui/button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "lg" | "xl";
  title: string;
  children: ReactNode;
}

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-2xl",
};

export default function Modal({
  open,
  onClose,
  size = "md",
  title,
  children,
}: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (open) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <Portal>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        aria-modal="true"
        role="dialog"
      >
        <div
          className="absolute inset-0 bg-black/50 opacity-0 animate-[fadeIn_0.2s_ease-out_forwards] dark:bg-gray-400/50"
          onClick={onClose}
        />

        <div
          className={`relative bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full ${sizeClasses[size]} p-4 z-10 
          opacity-0 animate-[scaleIn_0.25s_ease-out_forwards]`}
        >
          <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {title}
            </h2>
            <CloseButton onClose={onClose} />
          </div>
          {children}
        </div>
      </div>
    </Portal>
  );
}
