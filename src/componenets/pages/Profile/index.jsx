import React from 'react'
import { useAuth } from "../../../contexts/AuthContext";
import {Button,   } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Profile() {
 const {user, logout}=useAuth();
 let navigate=useNavigate();
 const handleLogout=async()=>{
  logout(()=>{
    navigate("../")
    
  });

 }
  return (
    <div>
        <code>
            <h2>Profile</h2>
            {JSON.stringify(user)}
        </code>
        <br/>
        <br/>
        <Button colorScheme='pink' variant="solid"
        onClick={handleLogout}>
          Log Out
        </Button>
    </div>
  )
}

export default Profile