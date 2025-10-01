interface UserInfoProps {
  name: string;
  avatar: string;
}

export default function UserInfo({ name, avatar }: UserInfoProps) {
  return (
    <div className="flex items-center gap-3 mt-3">
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <span className="font-medium text-gray-900 dark:text-gray-100">
          {name}
        </span>
        <select className="w-20 text-xs border rounded-md px-1 py-0.5 dark:bg-gray-800 dark:text-gray-300">
          <option>Public</option>
          <option>Friends</option>
          <option>Only me</option>
        </select>
      </div>
    </div>
  );
}
