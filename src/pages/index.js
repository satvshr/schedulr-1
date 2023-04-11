const Home = () => {
  return (
    <>
    <div className={"home-home-wrapper"}>
      <div className={"home-home"}>
        <div className={"home-overlap"}>
          <div className={"home-everything-else-LMAO"}>
            <div className={"home-overlap-group2"}>
              <div className={"home-background"}>
                <div className={"home-overlap-group"}>
                  <img className={"home-calendar"} src={"./calendar-382.png"} />
                  <img className={"home-calendar-382"} src={"./calendar-382-1.png"} />
                  <img className={"home-img"} src={"./calendar-382-2.png"} />
                </div>
              </div>
              <div className={"home-main-content"}>
                <div className={"home-overlap-group1"}>
                  <img className={"home-rectangle"} src={"./rectangle.svg"} />
                  <div className={"home-get-started"}><a href="/api/auth/login"> GET STARTED </a></div> 
                  {/* TODO: Make button look better */}
                  <div className={"home-about-us"}>ABOUT US</div>
                  <h1 className={"home-text-wrapper"}>You won’t believe how useless this app is.</h1>
                  <p className={"home-p"}>
                    That’s right, we put the u in useless by holding you at gunpoint to use this app. It’s either death or schedulr. You
                    choose.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={"home-schedulr"}>SCHEDULR</div>
          <img alt="okay" className={"home-icon-calendar"} src={'./icon.png'} />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;