import React, { useState, useEffect, useContext } from 'react'
import CreateEventButton from './CreateEventButton';
import Labels from './Labels';
import UserInfo from './UserInfo';
import GlobalContext from '../context/GlobalContext';

export default function Sidebar() {
  
  const { user } = useContext(GlobalContext);
  const [isSuperUser, setSuperUser] = useState(false);

  useEffect(() => {
    if (user.authority === 'Admin') {
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
