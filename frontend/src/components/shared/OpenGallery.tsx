import { useRef } from "react";
import assets from "../../assets";

interface GalleryProps {
  onFilesSelected: (files: File[]) => void;
}

export default function OpenGallery({ onFilesSelected }: GalleryProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const filesArray = Array.from(e.target.files);
    onFilesSelected(filesArray);
  };

  return (
    <>
      <button
        title="Add photos"
        type="button"
        className="btn"
        onClick={handleButtonClick}
      >
        <img
          src={assets.icons.gallery}
          alt="Gallery"
          className="h-5 w-5 dark:invert dark:brightness-200"
        />
      </button>
      {/* Hidden file input */}
      <input
        type="file"
        ref={inputRef}
        multiple
        accept="image/*"
        className="hidden"
        onChange={handleFilesChange}
      />
    </>
  );
}
