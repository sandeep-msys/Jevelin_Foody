import "./Home.scss";

const Home = () => {
  
  return (
    <div
      id="Home"
      className="Home-container"
      style={{
        backgroundImage: `url(${"image.jpg"})`,
      }}
    >
      <div className="home-header-container">
        <img
          src="https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/Vector-Smart-Object1.png"
          alt="/"
          className="balloon ballonAnimation"
        />
        <h2 className="home-header fadeDown">
          Premium
        </h2>
        <p className="home-matter">QUALITY</p>
        <h1 className="home-title leftAnimation">
          Restaurant
        </h1>
        <h1 className="home-title right-animation">& Dishes</h1>
        <div className="dropADot">
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
