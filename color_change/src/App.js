import { useState } from "react";
import "./App.css";

function App() {
  let [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap items-center justify-center  bottom-12 ml-80 insert-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 font-semibold  shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            className="outline-none px-4 rounded-full text-white  shadow-lg  "
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg  "
            style={{ backgroundColor: "Blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg  "
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg  "
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          >
            Olive
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg  "
            style={{ backgroundColor: "grey" }}
            onClick={() => setColor("grey")}
          >
            Grey
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg  "
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg  "
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg  "
            style={{ backgroundColor: "lavender" }}
            onClick={() => setColor("lavender")}
          >
            Lavender
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg  "
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            className="outline-none px-4 rounded-full text-black shadow-lg  "
            style={{ backgroundColor: "white" }}
            onClick={() => setColor("white")}
          >
            White
          </button>
          <button
            className="outline-none px-4 rounded-full text-white shadow-lg  "
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
