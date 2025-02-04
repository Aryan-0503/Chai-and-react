import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h2>Chai And code</h2>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<MyApp></MyApp>);
