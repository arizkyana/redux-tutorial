import { useHomeDispatch } from '@/redux/reducers/home/slices';

export default function HomeContainer() {
  const { home, makeIncrement, makeDecrement } = useHomeDispatch();
  return (
    <div className="lg:w-1/4 w-full min-h-screen p-3 mx-auto flex justify-center items-center">
      <div className="text-center w-full h-full ">
        <h1 className="text-2xl font-bold mb-5">Belajar Redux</h1>
        <div className="my-3">
          <span className="inline-block">
            Counter
          </span>
          {
            home.counter > 0 && (
              <span className="text-5xl block w-full" data-testid="result">
                {home.counter}
              </span>
            )
          }
          <div className="flex justify-center items-center -mx-1 my-3">
            <button
              type="button"
              className="bg-green-400 mx-1 border border-green-400 text-white px-6 py-2 rounded text-sm hover:bg-green-500"
              onClick={() => makeIncrement()}
              data-testid="increment"
            >
              Add +
            </button>
            <button
              type="button"
              className="bg-white mx-1 border border-green-800 text-green-800 px-6 py-2 rounded text-sm hover:bg-gray-200"
              onClick={() => makeDecrement()}
              data-testid="decrement"
            >
              Min -
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}
