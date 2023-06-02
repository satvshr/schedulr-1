import { getMonth } from './util';
import GlobalContext from '../context/GlobalContext';
import React, { useState, useContext, useEffect } from 'react';
import EventModal from './EventModal';
import CalendarHeader from './CalendarHeader';
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
       <div className="container">
        {showEventModal && <EventModal />}
        
        <div className="h-screen flex flex-col">
          <CalendarHeader />
          
          <div className="flex flex-1"> 
            <Sidebar />
            <Month month={currentMonth} />
          </div>
        
        </div>
      </div>
      </React.Fragment>
    
    );

}

export default Calendar;