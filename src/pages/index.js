import { useUser } from '@auth0/nextjs-auth0/client'
import React, { useState, useContext, useEffect } from 'react';
// import './App.css';
import { getMonth } from './components/util';
import Month from './components/Month';
import Sidebar from './components/Sidebar';
import CalendarHeader from './components/CalendarHeader';
import GlobalContext from './context/GlobalContext';
import EventModal from './components/EventModal';

const Home = () => {
  const { user } = useUser();
  
  // Logged In
  if (user) {
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
  
  // Logged out
  return (
    <>
    <main>

      <img alt="schedulr-icon" className={"home-icon-calendar"} src={'./icon.png'} />
      <div className={"home-schedulr"}>SCHEDULR</div>
      <div className={"home-about-us"}>ABOUT US</div>
      
        <h1 className={"home-content-h1"}>You won't believe how useless this app is.</h1>
        <p className={"home-content-p"}>
          That’s right, we put the u in useless by holding you at gunpoint to use this app. It’s either death or schedulr. You
          choose.
        </p>
        <button className={"home-button"} type="button" onClick={event =>  window.location.href='/api/auth/login'}> GET STARTED </button>
      
    </main>
    </>
  )
}

export default Home;
