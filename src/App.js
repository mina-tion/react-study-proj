import React, { useState } from "react"
import Content from "./Content"
import RecursiveButton from "./RecursiveButton"


const App = (props) => {

  const [showMode, setShowMode] = useState(true)

  let content = null

  if (showMode) {
    content = <Content />
  }

  const handlerOnClick = () => {
    setShowMode(!showMode)
  }

  return (
    <div>
      <RecursiveButton />
      <button onClick={handlerOnClick}>Show toggle</button>
      {content}
    </div>
  
  )

}


export default App;
