import React, { useState } from 'react'

export default function Card() {


    const [state,setstate]=useState("https://tse1.mm.bing.net/th/id/OIP.8K26QaUC7XnsL5o06mOQuwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3")
  return (
    <div>
      <img src={state}/>
    </div>
  )
}
