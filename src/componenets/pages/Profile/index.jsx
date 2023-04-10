import React from 'react'
import { useAuth } from "../../../contexts/AuthContext";

function Profile() {
 const {user}=useAuth();
 console.log(user);
  return (
    <div>
        <code>
            <h2>Profile</h2>
            {JSON.stringify(user)}
        </code>
    </div>
  )
}

export default Profile