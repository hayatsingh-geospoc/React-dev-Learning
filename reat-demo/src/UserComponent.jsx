import React from 'react'

const UserComponent = () => {

  let userList = [
    {
        id:1,
        name:"hayat",
        age:25

    },
    {
        id:2,
        name:"kaju",
        age:26

    },
    {
        id:3,
        name:"mummy",
        age:28

    }
]

  return (
    <div>
    
    <h key={Math.random()}>1</h>
    
    UserComponent
    
    </div>
  )
}

export default UserComponent