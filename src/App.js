import React, { useState } from "react"


const App = (props) => {

  const [value, setValue] = useState("hi!")

  return(
    <input value = {value} onChange={(e)=> setValue(e.target.value)}/>
  ) 
}

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       value: "Hi!"
//     }
//     this.handlerChange = this.handlerChange.bind(this)
//   }

//   handlerChange(e) { 
//     this.setState({
//       value: e.target.value
//     })
//   }

//   render(){
//     return(
//       <input value = {this.state.value} onChange={(e) => this.handlerChange(e)}/>
//     ) 
//   }
// }

export default App;
