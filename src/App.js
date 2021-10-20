import React, { useState } from "react"
import Content from "./Content"
import RecursiveButton from "./RecursiveButton"


const App = (props) => {

  const users = [
    { id: 0, name: "dfd", surname: "fdf"},
    { id: 1, name: "saaw", surname: "f"},
    { id: 2, name: "ggf", surname: "d"},
    { id: 3, name: "sfsf", surname: "fssdf"},
    { id: 4, name: "dgh", surname: "fsdf"},
  ]

  const handlerMouseEnter = (user) => {
    console.log(`${user.name} ${user.surname}`)
  }

  let list = users.map((user, index) => {
    const even = index % 2 ===0

    let style = {}
    if(even) {
      style = {color: "white", background: "black"}
    }

    return(
        <li key={user.id} style={style} onMouseEnter = {()=>handlerMouseEnter(user)}>
          {user.name} {user.surname}
        </li>
      )
  }
)

  return (
      <ul>
        {list}
      </ul>
    )

}


export default App;
