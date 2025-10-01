import { useState, useEffect, useRef } from "react";
import assets from "../../assets";

interface SearchFormProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchForm({
  onSearch,
  placeholder = "Search...",
}: SearchFormProps) {
  const [query, setQuery] = useState("");
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      const handle = requestAnimationFrame(() => {
        ref.current?.focus();
      });

      return () => cancelAnimationFrame(handle);
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(query);
    }, 500);

    return () => clearTimeout(timeout);
  }, [query, onSearch]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          ref={ref}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full p-2  border border-gray-200 dark:border-gray-700  rounded-md   bg-white dark:bg-gray-800  text-gray-900 dark:text-gray-100 
        placeholder-gray-400 dark:placeholder-gray-500
        focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
        transition"
        />
        {query.length > 0 && (
          <button
            type="button"
            className="absolute top-1 right-0.5 cursor-pointer p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={() => setQuery("")}
          >
            <img
              src={assets.icons.close}
              alt="Close"
              className="dark:invert dark:brightness-200"
            />
          </button>
        )}
      </div>
    </div>
  );
}
