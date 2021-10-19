import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Clock extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      title: "Time: ",
      date: new Date,
      counter: 0
    }

    setInterval(() => {
      this.setState((state, props) => ({
        date: new Date,
        counter: this.state.counter +1
      }))
    }, 1000)
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

// const Clock = (props) => { 

//   const [state, setState] = useState ({
//     date: new Date
//   })

//   let date = new Date

//   setInterval(() => setState({
//     date: new Date
//   })) 

//   return ( <p>{ state.date.toLocaleTimeString() }</p> )
// } 


ReactDOM.render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
