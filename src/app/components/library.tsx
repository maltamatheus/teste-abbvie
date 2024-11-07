export default function Library() {
  return (
    <div className="grid grid-cols-12 flex bg-gray-100 rounded-md">
      <span className="col-span-11 justify-self-center font-black text-center text-7xl py-5">
        Library
      </span>
      <span className="row-end">
        <button className="flex bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded text-white shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-5"
          >
            <path d="M8.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 13c.552 0 1.01-.452.9-.994a5.002 5.002 0 0 0-9.802 0c-.109.542.35.994.902.994h8ZM12.5 3.5a.75.75 0 0 1 .75.75v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0v-1h-1a.75.75 0 0 1 0-1.5h1v-1a.75.75 0 0 1 .75-.75Z" />
          </svg>
          <span className="px-2">Request</span>
        </button>
      </span>
      <div className="my-10 text-center col-span-full">
        Browse for assets needed to report and present analysis.
      </div>
      <span></span>
      <div className="relative justify-items-stretch">
        <input
          type="text"
          placeholder="Type to search..."
          className="border border-gray-300 rounded-lg w-full"
        />
        <span className="absolute left-3 top-2.5 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 4a6 6 0 106 6h.01A6 6 0 0010 4zM21 21l-4.35-4.35"
            />
          </svg>
        </span>
      </div>
      <span></span>
    </div>
  );
}
