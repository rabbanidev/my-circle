import { useRef, useEffect } from "react";

interface PostInputProps {
  placeholder?: string;
  onContent?: (value: string) => void;
  content?: string;
}

export default function PostInput({
  placeholder,
  content,
  onContent,
}: PostInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      const handle = requestAnimationFrame(() => {
        textareaRef.current?.focus();
      });

      return () => cancelAnimationFrame(handle);
    }
  }, []);

  return (
    <div className="py-4 flex-grow">
      <textarea
        ref={textareaRef}
        className="w-full border-0 outline-none text-sm text-gray-900 placeholder-gray-400 bg-transparent dark:text-gray-100 dark:placeholder-gray-500"
        placeholder={placeholder || "What's on your mind?"}
        rows={1}
        value={content}
        onChange={(e) => onContent?.(e.target.value)}
      />
    </div>
  );
}
