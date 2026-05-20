import React, { useState } from 'react'

export default function Counter12() {

const [state,setstate]=useState(0)

function con(){

    setstate(state+1)
}

  return (
    <div>
      <h1>Count22 {state}</h1>
<button onClick={con}>conthear</button>
    </div>
  )
}
