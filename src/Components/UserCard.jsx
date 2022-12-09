import React from 'react'

const UserCard = ({user,deleteUserById, setUpdateInfo}) => {
    
    const handleEdit = () =>{
        setUpdateInfo(user)
    }


  return (
    <article>
        <h3>
            {user.first_name} {user.last_name}
        </h3>
        <ul>
            <li><span>Correo: </span>{user.email}</li>
            <li><span>Cumpleaños: </span>{user.birthday}</li>
        </ul>
        <button onClick={() => deleteUserById(user.id)}><i className="fa-solid fa-trash-can"></i></button>
        <button onClick={handleEdit}><i className="fa-regular fa-pen-to-square"></i></button>
    </article>
  )
}

export default UserCard