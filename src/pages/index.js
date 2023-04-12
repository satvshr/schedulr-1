import { useUser } from '@auth0/nextjs-auth0/client'

const Home = () => {
  const { user } = useUser();
  
  // Logged In
  if (user) {
    return (
      <>
      <p> <a href='/api/auth/logout'> Logout</a></p>
      { console.log("asdas")}
      </>
    )
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
