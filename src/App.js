import React, { useState } from "react"


const App = (props) => {

  const [checked, setChecked] = useState(null)

  const items = ["Apple", "Orange", "Banana"]
  return(
     <ul>

      { items.map((item) => (
        <li key={item}>
          <input type="radio" checked={checked === item} onChange={()=>setChecked(item)}/>
          {item}
      </li>
       ))
      }

     </ul>
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
