import React, { useState } from "react"

const App = (props) => {

  const [counter, setCounter] = useState(0)

  const handlerClick = (event) => {
    setCounter(counter+1)
  }
  
  const handlerMouseEnter = (event) => {
    console.log("handlerMouseEnter")
  }
  const handlerMouseLeave = (event) => {
    console.log("handlerMouseLeave")
  }
  return (
    <button 
      onClick={handlerClick} 
      onMouseEnter={handlerMouseEnter} 
      onMouseLeave={handlerMouseLeave}>
        
      Clicked here {counter} times
    </button>
  )
}


export default App;
