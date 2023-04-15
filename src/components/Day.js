 import dayjs from 'dayjs';
import GlobalContext from '../context/GlobalContext';
import React, { useContext, useEffect, useState } from 'react';

// Display day and date in calendar
export default function Day({day, rowIdx}) {
  const {setDaySelected, setShowEventModal, filteredEvents, setSelectedEvent} = useContext(GlobalContext)

  const [dayEvents, setDayEvents] = useState([])
  useEffect(() => {
    const events = filteredEvents.filter(evt => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events)
  }, [filteredEvents, day]);
  // What is this for?
  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? 'bg-blue text-white rounded-full w-7' : "";
  }
  
  
  return (
    
    <div className='border border-gray-200 flex flex-col'>
        
        <header className='flex flex-col items-center'>
            
            {rowIdx === 0 && (
              <p className='text-small mt-1'>{day.format('ddd').toUpperCase()}</p>
            )}
            
            <p className='test-sm p-1 my-1 text-center ${getCurrentDayClass()}'>
            
            {day.format('DD')}
            
            </p>
        </header>
        
        <div className='flex-1 cursor-pointer' onClick={() => {
            setDaySelected(day);
            setShowEventModal(true);
        }}>
 {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
        </div>
    </div>
  
  )
}
