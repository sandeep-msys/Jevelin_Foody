import "./About.scss";
import { Divider } from "antd";
import React from'react'
const About = () => {
 
  const enableAboutAnimations = () => {
    document.getElementById("slideLeft").style.animation =
    "slideLeft 1.6s";
    document.getElementById("slideRight").style.animation =
    "slideRight 1.6s";
    document.getElementById("slideUp").style.animation =
    "slideUp 1.6s";
  }
  return (
    <div className="About-container" id="About"  onMouseOver={() => {
      enableAboutAnimations()
    }}>
      <div className="about-header-container">
        <h1 className="about-header">What We Can Offer</h1>
        <Divider>
          <p className="about-matter">from our hearts</p>
        </Divider>
      </div>
      <div className="SubAbouts-container">
        <div className='each-subabout-container'  id='slideLeft'>
          <div className="each-image-container"
         >
            <img
              src="https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/picture3.png"
              alt="/"
              className="each-image"
            />
          </div>
          <h1 className="each-header">
            Always
            <spam className="light-header">Fresh</spam>
          </h1>
          <p className="each-matter">
            Nulla dapibus tempus malesuada. Duis ultrices lacinia eleifend.
            Etiam vel luctus nibh. Donec eu volutpat.
          </p>
        </div>


        <div className='each-subabout-container'  id='slideUp'>
          <div className="each-image-container">
            <img
              src="https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/picture2.png"
              alt="/"
              className="each-image"
            />
          </div>
          <h1 className="each-header">
            Eco
            <spam className="light-header">Products</spam>
          </h1>
          <p className="each-matter">
            Nulla dapibus tempus malesuada. Duis ultrices lacinia eleifend.
            Etiam vel luctus nibh. Donec eu volutpat.
          </p>
        </div>


        <div className='each-subabout-container' id='slideRight'>
          <div className="each-image-container" >
            <img
              src="https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/picture1.png"
              alt="/"
              className="each-image"
            />
          </div>
          <h1 className="each-header">
          Healthy
            <spam className="light-header">Deserts</spam>
          </h1>
          <p className="each-matter">
            Nulla dapibus tempus malesuada. Duis ultrices lacinia eleifend.
            Etiam vel luctus nibh. Donec eu volutpat.
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default About;
