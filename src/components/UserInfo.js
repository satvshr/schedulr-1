import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext';

function UserInfo() {
  const { user } = useContext(GlobalContext);
  console.log(user.username);

  return (
    <>
      <p><b>Logged in as: </b></p>
      <p className='text-xm'>{user.username}</p>
    </>
  )
}

export default UserInfo