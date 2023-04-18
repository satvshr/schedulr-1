import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'

function UserInfo() {
  const user = useUser();

  return (
    <>
      <img src="https://w7.pngwing.com/pngs/722/101/png-transparent-computer-icons-user-profile-circle-abstract-miscellaneous-rim-account.png " alt="User Icon" />
      <h1>User: {user.name}</h1>
    </>
  )
}

export default UserInfo