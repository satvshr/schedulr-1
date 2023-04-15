import GlobalContext from '../context/GlobalContext'
import React, { useContext } from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'

export default function CalendarHeader() {

  const { monthIndex, setMonthIndex } = useContext(GlobalContext)

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(dayjs().month());
  }

  return (

    <header className='px-2 py-2 flex items-center'>


      <img src={'./icon.png'} alt="Calendar" className='mr-3 w-9 h-9' />

      <h1 className='mr-10 text-xl text-gray-500 font-bold'>
        Schedulr
      </h1>

      <button className="border rounded py-2 px-4 mr-30" onClick={handleReset}>
        Today
      </button>

      {/* TODO: Display icons instead of chevron text */}
      <button onClick={handlePrevMonth}>
        <span className='material-icons cursor-pointer text-gray-600 mt-2'>
          chevron_left
        </span>
      </button>

      <button onClick={handleNextMonth}>
        <span className='material-icons cursor-pointer text-gray-600 mt-2'>
          chevron_right
        </span>
      </button>

      <h2 className='ml-4 text-xl text-gray-500 font-bold'>
        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
      </h2>

      {/* Move to top right corner */}
      <button className={"text-gray-600 cursor-pointer ml-auto"} type="button" onClick={event => window.location.href = '/api/auth/logout'}> Log out </button>

    </header>
  )
}