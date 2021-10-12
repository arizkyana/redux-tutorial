export default function HomeContainer() {
  return (
    <div className="lg:w-1/4 w-full min-h-screen p-3 mx-auto flex justify-center items-center">
      <div className="text-center w-full h-full ">
        <h1 className="text-2xl font-bold mb-5">Belajar Redux</h1>
        <div className="my-3">
          <span className="inline-block">
            Counter
          </span>
          <span className="text-5xl block w-full">
            10
          </span>
          <div className="flex justify-center items-center -mx-1 my-3">
            <button
              type="button"
              className="bg-green-400 mx-1 border border-green-400 text-white px-6 py-2 rounded text-sm hover:bg-green-500"
            >
              Add +
            </button>
            <button
              type="button"
              className="bg-white mx-1 border border-green-800 text-green-800 px-6 py-2 rounded text-sm hover:bg-gray-200"
            >
              Min -
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}
