export default function About({ about }: { about?: string }) {
  if (!about) return null;
  return (
    <div className="pt-10 px-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
        About
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        {about}
      </p>
    </div>
  );
}
