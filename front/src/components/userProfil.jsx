import React from 'react';
import { Link } from "react-router-dom";

export function UserProfil({userData}){
    return (
        <>
        <h1 style={{margin:"0px 30px",textAlign:"right"}}><Link to={`/profil/edit`}>Edit</Link> / <Link to={`/profil/delete`}>Delete</Link></h1>
        <div style={{margin:"0px 30px",textAlign:"left"}}>
            <h2 >Email : {userData.email}</h2>
            <h2>Nom : {userData.surname}</h2>
            <h2>Prenom : {userData.name}</h2>
            <h2>Mdp : {userData.password}</h2>
        </div>
        </>
    )
}