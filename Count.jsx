import React, { useState } from 'react'

export default function Count() {

    const [state,setstate]=useState(0)

    function inc (){

        setstate(state+1)
    }
  return (
    <div>
        <h1>count is{state}</h1>
      <button onClick={inc}>click</button>
    </div>
  )
}
