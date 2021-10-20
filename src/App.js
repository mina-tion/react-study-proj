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

  let list = users.map((user) => (<LiUser key={user.id} user={user}/>))

  return (
      <ul>
        {list}
      </ul>
    )

}

const LiUser = (props) => {
  const user = props.user

  return (
    <li>
      {user.name} {user.surname}
    </li>
  )
}

export default App;
