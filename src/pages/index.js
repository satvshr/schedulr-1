import Calendar from '../components/Calendar';
import Landing from '../components/Landing';
import GlobalContext from '../context/GlobalContext';
import React, { useContext } from 'react'

const Home = () => {
  const { user } = useContext(GlobalContext);
  const bodyStyle = {
    backgroundColor: 'white',
    backgroundImage: 'none',
  };

  // Logged In
  if (user) {
    console.log(user)
    return (
      <>
        <body style={bodyStyle}>
          <Calendar />
        </body>
      </>
    )
  }

  // Logged out
  else { 
    return (
      <>
        <Landing />
      </>
    )
  }
}

export default Home
