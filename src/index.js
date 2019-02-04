import React from "react";
import ReactDOM from "react-dom";
import PokeCard from "./PokeCard"

import "./styles.css";

function App() {
  return (
    <div className="App">
      <PokeCard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
