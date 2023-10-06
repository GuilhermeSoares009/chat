import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

export const Login = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('teste login')
      navigate("/")
    } catch (err) {
      console.log({ 'err2': err });
      setErr(true)
    }
  }


  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder='email' />
          <input type="password" placeholder='senha' />
          <button>Entrar</button>
          {err && <span>Algo está errado</span>}  
        </form>
        <p> Você não possui uma conta? <Link to="/register" >Registre-se</Link></p>
      </div>
    </div>
  )
}
