import React, { useState } from "react";

function count() {
  const [count, setCount] = useState(1);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>count</button>
    </>
  );
}
export default count;
