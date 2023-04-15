import { useUser } from '@auth0/nextjs-auth0/client';
import React, { useState, useEffect } from 'react'
import SmallCalendar from './SmallCalendar';
import CreateEventButton from './CreateEventButton';
import Labels from './Labels';

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
      <aside className='border p-5 w-64'>
        <CreateEventButton disabled={!isSuperUser}/>
        <SmallCalendar />
        <Labels />
      </aside>
    </div>
  )
}
