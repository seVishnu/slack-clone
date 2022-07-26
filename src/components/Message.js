import React from 'react'
import '../styles/Message.css'

const Message = ({message, timestamp, user, userImage}) => {
  return (
    <div className='message'>
        <img src={userImage} alt='msg sender image'/>
        <div className='message_info'>
            <h4>{user} <span className='message__timestamp'>
            {new Date(timestamp?.toDate()).toUTCString()}
                </span></h4> 
            <p>{message}</p>
        </div>
    </div>
  )
}

export default Message