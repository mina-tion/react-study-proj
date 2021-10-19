import React from "react"

class App extends React.Component {
  constructor (props){
    super(props)

    this.intervalFlag = null
    this.state = {
      title: "Time: ",
      date: new Date,
      counter: 0
    }
  }

  componentDidMount() {
    this.intervalFlag = setInterval(() => {
      this.setState((state, props) => ({
        date: new Date,
        counter: this.state.counter +1
      }))
    }, 1000)
  }

  componentDidUpdate() {
    console.log("Component was updated")
  }


  componentWillUnmount() {
    clearInterval(this.intervalFlag)
  }

  render() {
    return (
      <div>
        <p>{this.state.title}</p>
        <p>{this.state.counter}</p>
        <p>{ this.state.date.toLocaleTimeString() }</p>
      </div>

   
    )
  }

}


export default App;
