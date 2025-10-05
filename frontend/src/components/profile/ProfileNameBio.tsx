export default function ProfileNameBio({
  name,
  bio,
}: {
  name: string;
  bio?: string;
}) {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-700 md:text-white dark:text-white">
        {name}
      </h1>
      {bio && (
        <p className="text-gray-700 md:text-gray-200 dark:text-gray-300">
          {bio}
        </p>
      )}
    </>
  );
}
