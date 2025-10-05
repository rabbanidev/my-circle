export default function ProfileSkeleton() {
  return (
    <>
      <div className=" animate-pulse relative w-full h-56 md:h-100 bg-gray-300 dark:bg-gray-700 rounded-md" />
      <div className=" animate-pulse flex flex-col relative top-3 md:flex-row md:items-end gap-4 md:gap-6 px-4 md:px-6 -mt-16 md:-mt-20">
        <div className="flex justify-center md:block shrink-0">
          <div className="w-32 h-32 rounded-full bg-gray-300 dark:bg-gray-700 border-4 border-white shadow-lg" />
        </div>

        <div className="flex-1 text-center md:text-left pb-4">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded-md w-40 mx-auto md:mx-0" />

          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md mt-2 w-64 mx-auto md:mx-0" />

          <div className="mt-4 flex justify-center md:justify-start gap-3">
            <div className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded-md" />
            <div className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded-md" />
            <div className="h-8 w-24 bg-gray-300 dark:bg-gray-700 rounded-md" />
          </div>
        </div>
      </div>

      <div className=" animate-pulse pt-10 px-6">
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded-md w-32 mb-3" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md w-full" />
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md w-5/6" />
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md w-3/4" />
        </div>
      </div>

      <div className=" animate-pulse pt-10 px-4 md:px-6">
        <div className="h-5 bg-gray-300 dark:bg-gray-700 rounded-md w-40 mb-3" />
        <div className="max-w-[560px] mx-auto md:mx-0">
          <div className="flex items-center gap-x-3 p-3 mb-4 border rounded-lg border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
            <div className="w-9 h-9 rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="flex-1 h-8 bg-gray-300 dark:bg-gray-700 rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
}
