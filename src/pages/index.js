import { useUser } from '@auth0/nextjs-auth0/client'
import Calendar from '../components/Calendar';
import Landing from '../components/Landing';

const Home = () => {

  const { user } = useUser();
  const bodyStyle = {
    backgroundColor: 'white',
    backgroundImage: 'none',
  };

  // Logged In
  if (user) {
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
