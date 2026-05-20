// import React, { useState } from 'react'

// export default function Ustate() {

//     //  const [dark, setdark] = useState(false)
//   return (
//     <div style={{
//         background: dark ? "black" : "white",
//         color: dark ? "white" : "black",
//         height: "100vh"
//       }}>
      

// <button onClick={() => setdark(!dark)}>
//         Toggle Mode
//       </button>

//     </div>
//   )
// }

// 3. Show Hide Password

import React, { useState } from 'react'

export default function Password() {

  const [show, setShow] = useState(false)

  return (
    <div>

      <input
        type={show ? "text" : "password"}
        placeholder="Enter Password"
      />

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>

    </div>
  )
}
