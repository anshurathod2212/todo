import React, { useRef } from "react";

export default function App() {
  const divRef = useRef();

  const check = () => {
    alert(divRef.current.scrollTop);
  };

  return (
    <div>
      <div ref={divRef} style={{ height: "100px", overflow: "scroll" }}>
        Long Content Long Content Long Content
        Long Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long ContentLong Content Long Content Long Content
      </div>
      <button onClick={check}>Check</button>
    </div>
  );
}