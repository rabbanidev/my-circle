import { useEffect, useState } from "react";
import Popup from "./Popup";
import assets from "../../assets";
import SearchForm from "./SearchForm";

// interface TagsProps {}

export default function AddTags() {
  const [open, setOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    if (!query) {
      return;
    }
  }, [query]);

  return (
    <Popup
      open={open}
      onClose={() => setOpen(false)}
      button={
        <button
          title="Add Tags"
          type="button"
          className="btn"
          onClick={() => setOpen(!open)}
        >
          <img
            src={assets.icons.multipleUser}
            alt="Location"
            className="h-5 w-5 dark:invert dark:brightness-200"
          />
        </button>
      }
      position="right-0"
    >
      <SearchForm
        onSearch={(value) => setQuery(value)}
        placeholder="Search on name."
      />
    </Popup>
  );
}
