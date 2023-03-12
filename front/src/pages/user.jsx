import React, {useEffect,useState} from 'react';
import { UserProfil } from '../components/userProfil';

export function User() {
    const [userData, setUserData] = useState();
    useEffect(() => {
        fetch("http://localhost:3001/api/user/profil", {
          headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // notice the Bearer before your token
      }})
        .then( response => response.json())
        .then( data => {
            setUserData(data)
        })
    }, [])
    return (
        <>
        {userData && 
            <UserProfil key={userData.id} userData={userData} />
        }
        </>
    )
}