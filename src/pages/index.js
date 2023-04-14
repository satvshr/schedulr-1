import { useUser } from '@auth0/nextjs-auth0/client'
import Calendar from './components/Calendar';
import About_Page from './components/About_Page';

const Home = () => {

  const { user } = useUser();
  const bodyStyle = {
    backgroundColor: 'white',
    backgroundImage: 'none'

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
        <About_Page />
      </>
    )
  }
}

export default Home
