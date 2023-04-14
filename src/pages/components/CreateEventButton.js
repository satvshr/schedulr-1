import Image from 'next/image'
import Icon from './icons/plus.png'
import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

function CreateEventButton() {
  
  const {setShowEventModal} = useContext(GlobalContext)
  
  return (
    
    <button onClick={() => setShowEventModal(true)} className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl'>
    
        <Image src={Icon} alt="create_event" width={25} height={25} />
        <span className='pl-3 pr-3'>
            Create
        </span>
    
    </button>
  )
}

export default CreateEventButton;