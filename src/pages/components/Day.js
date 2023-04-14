import dayjs from 'dayjs';
import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

// Display day and date in calendar
export default function Day({day, rowIdx}) {
  
  // What is this for?
  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? 'bg-blue-600 text-white rounded-full w-7' : "";
  }
  
  const {setDaySelected, setShowEventModal} = useContext(GlobalContext)
  
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
              {""}
        </div>
    </div>
  
  )
}
