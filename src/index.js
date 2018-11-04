import React from "react";
import ReactDOM from "react-dom";
import Title from "./Title";

function App() {
  return (
    <div>
      <Title />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
