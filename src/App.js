import React from "react"

// const App = (props) => {

//   const [counter, setCounter] = useState(0)

//   const handlerClick = (event) => {
//     setCounter(counter+1)
//   }
  
//   const handlerMouseEnter = (event) => {
//     console.log("handlerMouseEnter")
//   }
//   const handlerMouseLeave = (event) => {
//     console.log("handlerMouseLeave")
//   }
//   return (
//     <button 
//       onClick={handlerClick} 
//       onMouseEnter={handlerMouseEnter} 
//       onMouseLeave={handlerMouseLeave}>
        
//       Clicked here {counter} times
//     </button>
//   )
// }


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }

    this.handlerClick = this.handlerClick.bind(this)
  }
  

  handlerClick() {
    this.setState({counter: this.state.counter + 1})
  }
  

  render() {
    return (
          <button onClick={this.handlerClick} >
                          
            Clicked here {this.state.counter} times
          </button>
        )
  }

}

export default App;
