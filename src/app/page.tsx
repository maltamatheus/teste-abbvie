export default function Home() {
  return (
    <div className="my-10 mx-20">
      <div className="grid grid-cols-3 bg-gray-100 py-10 px-10 justify-items-center">
        <div className="bg-blue-600 text-white font-black text-center py-2 px-2">
          LADO ESQUERDO
        </div>
        <div className="bg-green-200 py-5 px-5 grid place-items-start">
          <button className="inline-flex bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded text-white shadow">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-5"
              >
                <path d="M8.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 13c.552 0 1.01-.452.9-.994a5.002 5.002 0 0 0-9.802 0c-.109.542.35.994.902.994h8ZM12.5 3.5a.75.75 0 0 1 .75.75v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0v-1h-1a.75.75 0 0 1 0-1.5h1v-1a.75.75 0 0 1 .75-.75Z" />
              </svg>
            </span>
            <span className="px-2">Request</span>
          </button>
        </div>
        <div className="bg-yellow-600 text-center py-2 px-2 text-white font-black">
          LADO DIREITO
        </div>
      </div>
    </div>
  );
}
