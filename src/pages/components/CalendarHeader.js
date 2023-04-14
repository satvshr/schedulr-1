import GlobalContext from '../context/GlobalContext'
import React, { useContext } from 'react'
import dayjs from 'dayjs'

export default function CalendarHeader() {
  
  const {monthIndex, setMonthIndex} = useContext(GlobalContext)
  
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

    <header className='px-4 py-2 flex items-center'>
      
      <img src={'./icon.png'} alt="Calendar" className='mr-12 w-12 h-12'/> 
      
      <h1 className='mr-10 text-xl text-gray-500 font-bold'>
        Schedulr
      </h1>
      
      <button className="border rounded py-2 px-4 mr-5" onClick={handleReset}>
        Today
      </button>

      {/* TODO: Display icons instead of chevron text */}      
      <button onClick={handlePrevMonth}>
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
          chevron_left
        </span>
      </button>
      
      <button onClick={handleNextMonth}>
        <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
          chevron_right
        </span>
      </button>
      
      <h2 className='ml-4 text-xl text-gray-500 font-bold'>
        {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')}
      </h2>

      {/* Move to top right corner */}
      <button className={"text-gray-600 cursor-pointer "} type="button" onClick={event =>  window.location.href='/api/auth/logout'}> Log out </button>

    </header>
  )
}