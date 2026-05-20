import React, { useEffect, useState } from 'react'


export default function Testtodo() {

    const[text,settext]=useState("")
    const[state,setState]=useState([])


 useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos"))
    if (data) {
      setState(data)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state))
  }, [state])


    function handlechange(e) {
    settext(e.target.value)
  }

  function handlesubmit(e) {
    e.preventDefault()

    setState([...state,text])
  }


function deletei(id){

    console.log(id)

  const ans = state.filter((el, i) => i !== id)
    setState(ans)
    
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
              <button onClick={() => deletei(i)}>Delete</button>
            </div>
          )
        })
      }
    </div>
  )
}
