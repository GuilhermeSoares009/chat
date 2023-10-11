import React, { useState } from 'react'
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../firebase"

export default function Search() {

  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const handleSearch = async() => {
    const q = query(
      collection(db,"users"),
      where("displayName","==", userName)
    );

      try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setUser(doc.data());
        });

      } catch (error) {
        setErr(true)
      }

  };


  const handleKey = (e) => {
    e.code === "Enter" && handleSearch()
  };

  return (
    <div className='search'>
        <div className='searchForm'> 
            <input type="text" 
            placeholder='Encontre um usuário' 
            onKeyDown={handleKey}  
            onChange={ (e) => setUserName(e.target.value) }/>   
        </div>
        {err && <span>Usuário não encontrado</span>}
        {user && <div className="userChat">
            <img src={user.photoURL} alt="" />
            <div className="userChatInfo">
                <span>{user.displayName}</span>
            </div>
        </div> }
    </div>
  )
}
