import React, { useState } from "react";
import "./App.css";
import { spellNum } from "./utilCalculation";

function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  let numbers = {};

  const calculate = () => {
    if (num in numbers) {
      setResult(numbers[num]);
    }
    numbers[num] = setResult(spellNum(num));
  };

  return (
    <div className="app">
      <h1>{result}</h1>
      <div className="app__form">
        <input
          className="app__input"
          value={num}
          onChange={(event) => setNum(event.target.value)}
        />

        <button
          className="app__button"
          disabled={!num}
          type="submit"
          onClick={calculate}
        >
          Spell number
        </button>
      </div>
    </div>
  );
}

export default App;
