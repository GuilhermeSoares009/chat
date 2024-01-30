import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

export default function Message({message}) {

  const {currentUser} = useContext(AuthContext);
  const {data} = useContext(ChatContext);

  return (
    <div className="message owner">
{/*         <div className="messageInfo">
            <img src="https://images.pexels.com/photos/1486213/pexels-photo-1486213.jpeg?auto=compress&cs=tinysrgb&w=600" />
            <span>just now</span>
        </div>
        <div className="messageContent">
            <p>Olá</p>
             <img src="https://images.pexels.com/photos/1486213/pexels-photo-1486213.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> 
        </div> */}
    </div>

  )
}
