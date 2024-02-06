import React from "react";
import Login from "./Login"

const isTrue=false;


function App() {
  return (
    <div className="container">
     {isTrue?<h1>Hello</h1>:<Login />} 
      
    </div>
  );
}

export default App;
 