import React, { useContext, useState } from 'react'
import { 
  collection, 
  query, 
  where,
  doc, 
  getDoc, 
  getDocs,
  setDoc, 
  serverTimestamp, 
  updateDoc, 
 
} from "firebase/firestore";
import {db} from "../firebase"
import {AuthContext} from "../context/AuthContext";

export default function Search() {

  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const {currentUser} = useContext(AuthContext)

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

  const handleSelect = async () => {
    const combinedId = 
      (currentUser.uid > user.uid)
      ? currentUser.uid + user.uid
      : user.uid + currentUser.uid;

      try {
        const res = await getDoc(doc(db, "chats", combinedId));

        if(!res.exists()) {
          // cria uma coleção de chats
          await setDoc(doc(db, "chats", combinedId), { messages: [] });
  
          // cria chats por usuário
          await updateDoc(doc(db, "userChats", currentUser.uid), {
            [combinedId+".userInfo"]: {
              uid: user.uid,
              displayName: user.displayName,
              photoURL: user.photoURL
            },
            [combinedId+".date"]: serverTimestamp()
          });

          await updateDoc(doc(db, "userChats", user.uid), {
            [combinedId+".userInfo"]: {
              uid: currentUser.uid,
              displayName: currentUser.displayName,
              photoURL: currentUser.photoURL
            },
            [combinedId+".date"]: serverTimestamp()
          });
  
        }
      } catch (err) { }

      setUser(null);
      setUserName("");

  } 

  return (
    <div className='search'>
        <div className='searchForm'> 
            <input type="text" 
            placeholder='Encontre um usuário' 
            onKeyDown={handleKey}  
            onChange={ (e) => setUserName(e.target.value) }
            value={userName}/>   
        </div>
        {err && <span>Usuário não encontrado</span>}
        {user && (
            <div className="userChat" onClick={handleSelect}>
                <img src={user.photoURL} alt="" />
                <div className="userChatInfo">
                    <span>{user.displayName}</span>
                </div>
            </div> 
        )}
    </div>
  )
}
