import React, { useState, useContext, useEffect } from 'react';
import GlobalContext from '../context/GlobalContext';
import CalendarHeader from './CalendarHeader';
import EventModal from './EventModal';
import { getMonth } from './util';
import Sidebar from './Sidebar';
import Month from './Month';


function Calendar() {

    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const {monthIndex, showEventModal} = useContext(GlobalContext)
    
    useEffect(() => {
      setCurrentMonth(getMonth(monthIndex));    
    }, [monthIndex]);
    
    return (
      
      <React.Fragment>
        {showEventModal && <EventModal />}
        
        <div className="h-screen flex flex-col">
          <CalendarHeader />
          
          <div className="flex flex-1"> 
            <Sidebar />
            <Month month={currentMonth} />
          </div>
        
        </div>
      
      </React.Fragment>
    
    );

}

export default Calendar;