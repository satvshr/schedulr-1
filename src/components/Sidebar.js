import { useUser } from '@auth0/nextjs-auth0/client';
import React, { useState, useEffect } from 'react'
import CreateEventButton from './CreateEventButton';
import Labels from './Labels';
import UserInfo from './UserInfo';

export default function Sidebar() {
  
  const { user } = useUser();
  const [isSuperUser, setSuperUser] = useState(false);

  useEffect(() => {
    if (user.name === 'ivinjoelabraham@outlook.com') {
      setSuperUser(true);
    }
  }, [user])

  return (
    <div>
      <aside className='w-64 p-5 border'>
        <UserInfo />
        <CreateEventButton disabled={!isSuperUser}/>
        <Labels />
      </aside>
    </div>
  )
}
