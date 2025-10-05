import { useState } from "react";
import assets from "../../assets";
import { imagePreview } from "../../utils";

export default function AddCoverPhoto({ name }: { name: string }) {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="relative w-full h-56 md:h-100 overflow-hidden rounded-md bg-gray-400">
      <img
        src={file ? imagePreview(file) : ""}
        alt={name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 dark:bg-black/20"></div>

      <label className="absolute top-3 right-3 flex items-center gap-x-1 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 text-sm rounded-md cursor-pointer hover:bg-black/80 transition">
        <img
          src={assets.icons.camera}
          alt="Edit"
          className="h-4 w-4 invert brightness-200"
        />
        Edit cover photo
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setFile(e.target.files[0]);
            }
          }}
        />
      </label>
    </div>
  );
}
