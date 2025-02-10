import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-500" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-2 bg-black mx-8 rounded-full" >
        <button className="bg-red-400 px-4 py-1 rounded-full gap-3 mx-1" style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}>
          Red
        </button>
        <button className="bg-blue-400 px-4 py-1 rounded-full gap-3 mx-1"
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("blue")}>
          blue
        </button>
        <button className="bg-green-400 px-4 py-1 rounded-full gap-3 mx-1"
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}>
          Green
        </button>
        <button className="bg-gray-400 px-4 py-1 rounded-full gap-3 mx-1"
          style={{ backgroundColor: "gray" }}
          onClick={() => setColor("gray")}>
          gray
        </button>
        <button className="bg-yellow-400 px-4 py-1 rounded-full gap-3 mx-1"
          style={{ backgroundColor: "yellow" }}
          onClick={() => setColor("yellow")}>
          yellow
        </button> <button className=" bg-purple-400 px-4 py-1 rounded-full gap-3 mx-1"
          style={{ backgroundColor: "olive" }}
          onClick={() => setColor("olive")}>
          olive
        </button>
      </div>
    </div>
  );
}
export default App;
