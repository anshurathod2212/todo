// import React, { useRef } from 'react'

// export default function Test() {

//     const formRef = useRef()
//   return (
//     <div>
//        <form ref={formRef}>
//       <input />
//       <button type="button" onClick={() => formRef.current.reset()}>
//         Reset
//       </button>
//     </form>
//     </div>
//   )
// }




import React, { useRef, useState } from 'react'

export default function Test() {
 

    const [count ,setCount]=useState(0)
    const prev = useRef(0)

 const update = () => {
    prev.current = count;
    setCount(count + 1);
  };

    
  return (
    <div>
       <h1>Current: {count}</h1>
      <h2>Previous: {prev.current}</h2>
      <button onClick={update}>+</button>
    </div>
  )
}


