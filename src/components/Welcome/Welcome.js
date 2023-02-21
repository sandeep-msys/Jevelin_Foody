import "./Welcome.scss";
const Welcome = () => {
  const enableWelcomeAnimations = () => {
    document.getElementById("slideToLeft").style.animation =
    "slideLeft 3s";
    document.getElementById("slideToLeft").style.visibility = "visible";

    document.getElementById("SlideToRight").style.visibility = "visible";
    document.getElementById("SlideToRight").style.animation =
    "slideRight 3s";
  }
  return (
    <div className="Welcome-container" id='Welcome'
    onMouseOver={() => {
      enableWelcomeAnimations()
    }}>
      <div className="slide-container">
        <div
          className="image-container"
          id='SlideToRight'
        >
          <img
            src="https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/brooke-lark-96398.jpg"
            alt="/"
            className="image"
          />
        </div>
        <div className="matter-container SlideToRightMatter">
          <div className="welcome-background-container">
            <em className="welcome-background">w</em>
          </div>
          <div className="welcome-inner-matter">
            <h1 className="welcome-note">Welcome to Jevelin Restaurant</h1>
            <p className="welcome-matter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse sagittis tortor eget sodales ultrices. Pellentesque
              bibendum condimentum neque, nec iaculis augue ultrices ac. Fusce
              interdum viverra aliquet.
            </p>
            <p className="welcome-about">ABOUT US</p>
          </div>
        </div>
      </div>



      <div className="slide-container">
        <div className="matter-container">
          <div className="chef-background-container">
            <em className="chef-background">&</em>
          </div>
          <div className="chef-inner-matter">
            <h1 className="chef-note">
              Chef & Owner Kate Fuson and Her Husband Jack
            </h1>
            <p className="chef-matter">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse sagittis tortor eget sodales ultrices. Pellentesque
              bibendum
            </p>
            <p className="chef-about">READ MORE</p>
          </div>
        </div>
        <div
          className="image-container"
          id='slideToLeft'
        >
          <img
            src="https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/monika-grabkowska-323579.jpg"
            alt="/"
            className="image"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
