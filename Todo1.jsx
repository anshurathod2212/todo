import React, { useState } from 'react'

export default function Todo1() {
    
  const [text, setText] = useState("")
  const [state, setState] = useState([])

  function handler(e) {
    setText(e.target.value)
  }

  function hand(e) {
    e.preventDefault()
    setState([...state, text])
    setText("")
  }

  function Deletei(id) {
    const ans = state.filter((_, i) => i !== id)
    setState(ans)
  } 

  return (
    <div>
      <h1>Todo App</h1>

      <form onSubmit={hand}>
        <input 
          type="text" 
          placeholder="name"  
          value={text} 
          onChange={handler}
        />
      </form>

      {
        state.map((el, i) => (
          <div key={i}>
            <li>{el}</li>
            <button onClick={() => Deletei(i)}>Delete</button>
          </div>
        ))
      }
    </div> 
  )
}