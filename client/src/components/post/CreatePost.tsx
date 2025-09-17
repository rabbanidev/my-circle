import React, { useState } from "react";
import Modal from "../shared/Modal";
import UserInfo from "./UserInfo";
import PostInput from "./PostInput";
import Emoji from "../shared/Emoji";
import OpenGallery from "../shared/OpenGallery";
import { imagePreview } from "../../utils";
import AddLocation from "../shared/AddLocation";
import type { ILocation } from "../../types";
import AddTags from "../shared/AddTags";

export default function CreatePost(): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);
  const [location, setLocation] = useState<ILocation | null>(null);

  let title: string = "Golam Rabbani";
  if (location) {
    title += ` is in ${location.display_name}`;
  }

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="flex items-center gap-x-3 p-3 mb-4 border rounded-lg border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm cursor-pointer"
      >
        <a
          href="#"
          className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center"
        >
          <img
            src="https://avatars.githubusercontent.com/u/61206200"
            className="w-full h-full object-cover"
            alt="Golam Rabbani"
          />
        </a>

        <div className="bg-gray-100 dark:bg-gray-800 w-full py-2 px-4 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          What's on your mind, Golam Rabbani?
        </div>
      </div>

      <Modal
        title="Create Post"
        open={open}
        onClose={() => setOpen(false)}
        size="lg"
      >
        <form className="bg-white dark:bg-gray-900 rounded-lg p-4">
          <UserInfo
            name={title}
            avatar="https://avatars.githubusercontent.com/u/61206200"
          />
          <div className="py-4 flex-grow">
            <PostInput content={content} onContent={setContent} />
            {
              <div className="flex gap-2 mt-2 flex-wrap">
                {imagePreview(files).map((src, idx) => (
                  <img
                    key={idx}
                    src={src}
                    alt={`preview-${idx}`}
                    className="w-32 h-32  rounded-md"
                  />
                ))}
              </div>
            }
            <div className="flex justify-between items-center mt-2">
              <Emoji content={content} onContent={setContent} />
              <span className="text-gray-400 text-xs">
                {[...content].length || 0}/2200
              </span>
            </div>
          </div>
          <div className="mt-3 border border-gray-200 dark:border-gray-700 rounded-lg p-2 flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
              Add to your post
            </span>
            <div className="flex items-center gap-3">
              <OpenGallery onFilesSelected={setFiles} />
              <AddLocation
                currentLocation={location}
                onLocation={(selectLocation) =>
                  setLocation(selectLocation ? { ...selectLocation } : null)
                }
              />
              <AddTags />
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}
