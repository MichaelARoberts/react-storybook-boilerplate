import React from "react";
import "./App.scss";
import "./components/Counter/Counter";
import Counter from "./components/Counter/Counter";
function App() {
  return (
    <div className="App">
      <Counter amount={1} />
    </div>
  );
}

export default App;
