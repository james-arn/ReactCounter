import "./App.css";
import { useState } from "react";
import Counter from "./components/counter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Counter</h1>
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

export default App;
