import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'

function UserInfo() {
  const { user }= useUser();
  console.log(user.name);

  return (
    <>
      <p><b>Logged in as: </b></p>
      <p className='text-xm'>{user.name}</p>
    </>
  )
}

export default UserInfo