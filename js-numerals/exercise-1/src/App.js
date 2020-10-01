import React from "react";
import "./App.css";
import { spellNum } from "./utilCalculation";

function App() {
  return (
    <div className="App">
      <h1>{spellNum(111115)}</h1>
    </div>
  );
}

export default App;
