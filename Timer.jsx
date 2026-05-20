import React, { useRef, useState } from 'react'

export default function Timer() {

    const [State,setState]=useState(0)
    const id=useRef(null)

    console.log(id)

    function Start(){

        id.current= setInterval(()=>{


            setState((prev)=>prev+1)
            console.log(id)
       },1000)
    }

function Stop(){

    clearInterval(id.current)
}

  return (
    <div>
      <h1>Timer is {State}</h1>

      <button onClick={Start}>Start</button>
      <button onClick={Stop}>Stop</button>
    </div>
  )
}
