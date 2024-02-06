import React, { useState } from "react";

function App() {
  let [time, settime] = useState(new Date().toLocaleTimeString());

  function setTime() {
    settime((time = new Date().toLocaleTimeString()));
  }
  setInterval(setTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={setTime}>Get Time</button>
    </div>
  );
}

export default App;
