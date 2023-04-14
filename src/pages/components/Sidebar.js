import { useUser } from '@auth0/nextjs-auth0/client';
import React, { useState, useEffect } from 'react'
import SmallCalendar from './SmallCalendar';
import CreateEventButton from './CreateEventButton';

export default function Sidebar() {
  
  const { user } = useUser();
  const [isSuperUser, setSuperUser] = useState(false);

  useEffect(() => {
    console.log("username ", user.name, " super user bool ", isSuperUser)
    if (user.name === 'ivinjoelabraham@outloo.com') {
      setSuperUser(true);
    }
  }, [user])

  return (
    <div>
      <aside className='border p-5 w-64'>
        <CreateEventButton disabled={setSuperUser}/>
        <SmallCalendar />
      </aside>
    </div>
  )
}
