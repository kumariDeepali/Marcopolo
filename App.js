import React from "react";
//import "../styles/App.css";
import { useState } from "react";

const App = () => {
  const [buttons, setButtons] = useState(true);

  const handleClick = () =>
    setButtons((prevstate) => {
      return !prevstate;
    });

  return (
    <div id="main">
      <h1 id="marco-polo">{buttons ? "Marco" : "Polo"}</h1>
      <button id="marco-polo-toggler" onClick={handleClick}>
        {buttons ? "Polo" : "Marco"}
      </button>
    </div>
  );
};

export default App;
