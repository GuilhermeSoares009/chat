import React from 'react'

export default function Search() {
  return (
    <div className='search'>
        <div className='searchForm'> 
            <input type="text" placeholder='Encontre um usuário' />   
        </div>
        <div className="userChat">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="userChatInfo">
                <span>Jane</span>
            </div>
        </div>
    </div>
  )
}
