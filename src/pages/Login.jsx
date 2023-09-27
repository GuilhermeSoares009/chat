import React from 'react'
import Add from "../img/addAvatar.png"

export const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Lama Chat</span>
            <span className="title">Register</span>
            <form action="">
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='senha'/>
                <button>Inscreva-se</button>
            </form>
            <p> Você não possui uma conta? Registre-se aqui</p>
        </div>
    </div>
  )
}
