import { useState } from "react";

function App(): JSX.Element {
  const [background, setBackground] = useState("#ffffff");

  const handlerForm = () => {};

  return (
    <>
      <div className={background + " h-full "}>
        <div className="flex flex-row justify-center">
          <button
            className="outline outline-1 rounded-md py-3 px-5 m-5 w-32 hover:bg-purple-600 hover:text-white"
            onClick={() => setBackground("bg-teal-300")}
          >
            Teal
          </button>
          <button
            className="outline outline-1 rounded-md py-3 px-5 m-5 w-32 hover:bg-purple-600 hover:text-white"
            onClick={() => setBackground("bg-yellow-300")}
          >
            Yellow
          </button>
        </div>
      </div>
      <div className="border-2 p-10">
        <form onSubmit={handlerForm}>
          <input
            className="border-2 border-black rounded-lg p-2"
            type="text"
            name="name"
            id="name"
            placeholder="Input Name Todos"
          />
          <input
            className="border-2 border-black rounded-lg p-2"
            type="text"
            name="time"
            id="time"
            placeholder="Input Time Todos"
          />
          <button
            className="border-2 border-black rounded-md p-2"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
