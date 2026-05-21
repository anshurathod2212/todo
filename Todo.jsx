import React, { useState } from 'react'

export default function Todo() {

  const [text, setText] = useState("")
  const [state, setState] = useState([])
  const [edit, setEdit] = useState(null)

  function handlechange(e) {
    setText(e.target.value)
  }

  function handlesubmit(e) {
    e.preventDefault()

    if (edit !== null) {
      const updatedList = [...state]
      updatedList[edit] = text
      setState(updatedList)
      setEdit(null)
    } else {
      setState([...state, text])
    }

    setText('')
  }

  function Deletei(id) {
    const ans = state.filter((_, i) => i !== id)
    setState(ans)
  }

  function Edit(id) {
    setText(state[id])
    setEdit(id)
  }

  return (
    <div>
      <h1>Todo App</h1>

      <form onSubmit={handlesubmit}>
        <input 
          type="text" 
          placeholder="enter name" 
          value={text} 
          onChange={handlechange}
        />
        <input type="submit" />
      </form>

      {
        state.map((el, i) => {
          return (
            <div key={i}>
              <li>{el}</li>
              <button onClick={() => Deletei(i)}>Delete</button>
              <button onClick={() => Edit(i)}>Edit</button>
            </div>
          )
        })
      }
    </div>
  )
}
video todo :-  https://drive.google.com/drive/folders/165SwxhUH3viWW3U3qbIZbO8Yg-y0ZT4V?usp=sharing
