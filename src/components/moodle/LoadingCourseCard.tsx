export default function LoadingCourseCard() {
  return (
    <div className="max-w-xs min-w-xs rounded-md shadow-lg inset-shadow-xs flex-1">
      <div className="animate-pulse">
        <div className="flex justify-center">
          <div className="flex-0 inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-30 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
        </div>
        <div className="flex space-x-4 p-4">
          <div className="flex-1 space-y-3 py-1">
            <div className="h-2 rounded bg-gray-300"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-gray-300"></div>
                <div className="col-span-1 h-2 rounded bg-gray-300"></div>
              </div>
              <div className="h-2 rounded bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
