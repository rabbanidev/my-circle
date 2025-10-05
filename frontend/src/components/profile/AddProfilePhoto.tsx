import { useState } from "react";
import assets from "../../assets";
import { imagePreview } from "../../utils";

export default function AddProfilePhoto({ name }: { name: string }) {
  const [file, setFile] = useState<File | null>(null);
  return (
    <div className="relative w-32 h-32 shrink-0">
      <img
        src={file ? imagePreview(file) : ""}
        alt={name}
        className="w-full h-full rounded-full border-4 border-white shadow-lg object-cover"
      />

      <label className="absolute bottom-2 right-2 bg-gray-500 text-white p-2 rounded-full cursor-pointer">
        <img
          src={assets.icons.camera}
          alt="Edit"
          className="h-4 w-4 invert brightness-200"
        />
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
