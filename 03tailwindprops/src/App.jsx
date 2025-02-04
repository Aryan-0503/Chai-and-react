import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <>
      <Card price="500" Hobby="cricket"></Card>
    </>
  );
}

export default App;