import React from "react"


const App = (props) => {
  const handlerOnThirdClick = () => {
      console.log('3d click here ')
  }
  return <Button onThirdClick={handlerOnThirdClick}/>

}


export default App;
