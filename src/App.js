import "./styles.css";
import React, { useState } from "react";

// const [count, setCount] = useState(1);

export default function App() {
  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
      <HOC cmp={Count} />
      <HOCg cmp={Count} />
      {/* <Count /> */}
    </div>
  );
}
function HOC(props) {
  return (
    <h2 style={{ backgroundColor: "red", width: 100 }}>
      <props.cmp />
    </h2>
  );
}
function HOCg(props) {
  return (
    <h2 style={{ backgroundColor: "green", width: 100 }}>
      <props.cmp />
    </h2>
  );
}
function Count() {
  const [count, setCount] = useState(1);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>count</button>
    </>
  );
}
// export default Count;
