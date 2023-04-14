import React, { useState, useEffect } from 'react'
import CreateEventButton from './CreateEventButton';
import SmallCalendar from './SmallCalendar';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Sidebar() {
  const { user } = useUser();
  const [isSuperUser, setSuperUser] = useState(false);

  useEffect(() => {
    if (user && user.name === 'ivinjoelabraham@outlook.com') {
      setSuperUser(true);
    }
  }, [user])

  return (
    <div>
      <aside className='border p-5 w-64'>
        {isSuperUser && <CreateEventButton />}
        <SmallCalendar />
      </aside>
    </div>
  )
}
