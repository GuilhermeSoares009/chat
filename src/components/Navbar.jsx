import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">Lama chat</div>
      <div className="user">
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <span>John</span>
        <button>logon</button>
      </div>
    </div>
  )
}