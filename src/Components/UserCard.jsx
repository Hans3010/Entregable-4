import React from 'react'
import './styles/userCard.css'

const UserCard = ({user,deleteUserById, setUpdateInfo}) => {
    
    const handleEdit = () =>{
        setUpdateInfo(user)
    }


  return (
    <article className='card'>
        <h3 className='card_title'>
            {user.first_name} {user.last_name}
        </h3>
        <ul className='card_body'>
            <li className='card_item'><span className='card_span'>Correo: </span>{user.email}</li>
            <li className='card_item'><span className='card_span'>Cumpleaños: </span>{user.birthday}</li>
        </ul>
        <div className="card_footer">
        <button className='card_btn card_btn_trash' onClick={() => deleteUserById(user.id)}><i className="fa-solid fa-trash-can"></i></button>
        <button className='card_btn card_btn_edit' onClick={handleEdit} ><i className="fa-regular fa-pen-to-square"></i></button>
        </div>
    </article>
  )
}

export default UserCard