import { generateAvatar } from "../../utils";

interface AvatarProps {
  name: string;
  url: string | undefined;
}

export default function Avatar({ name = "", url }: AvatarProps) {
  if (!url) {
    return (
      <div
        title={name}
        className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-500 text-gray-600 dark:text-white font-semibold"
      >
        {generateAvatar(name)}
      </div>
    );
  }

  return <img src={url} alt={name} className="w-full h-full object-cover" />;
}
