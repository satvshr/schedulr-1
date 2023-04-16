import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import Image from 'next/image'
import Icon from './icons/plus.png'

function CreateEventButton(disabledBool) {

  const { setShowEventModal } = useContext(GlobalContext)
  if (disabledBool.disabled) {
    return (
      <button  onClick={() => setShowEventModal(true)} className='hidden border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl'>

        <Image src={Icon} alt="create_event" width={25} height={25} />
        <span className='pl-3 pr-3'>
          Create
        </span>

      </button>

    )
  } else {
    return (
      <button onClick={() => setShowEventModal(true)} className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl'>

        <Image src={Icon} alt="create_event" width={25} height={25} />
        <span className='pl-3 pr-3'>
          Create
        </span>

      </button>
    )
  }
}

export default CreateEventButton;