import { Divider } from "antd";
import "./Contact.scss";
import Maps from "./Maps/Maps";
const Contact = () => {
  const enableContactAnimations = () => {
    document.getElementById("slideToStart").style.animation =
      "slideToStart 1.6s";
    document.getElementById("slideToEnd").style.animation = 
    "slideToEnd 1.6s";
    document.getElementById("slideToEnd").style.visibility = 
    "visible";
    document.getElementById("slideToStart").style.visibility = 
    "visible";
  };
  return (
    <div
      className="Contact-container"
      id="Contact"
      onMouseOver={() => {
        enableContactAnimations();
      }}
    >
      <div className="contact-details-container" id="slideToEnd">
        <div className="contact-title">How to Find & Contact Us</div>
        <div className="contact-time-container">
          <div className="each-time">
            <p className="day">
              <strong>Monday - Thurday</strong>
            </p>
            <p className="time">10:00 - 22:00</p>
          </div>
          <Divider />
          <div className="each-time">
            <p className="day">Friday - Saturday</p>
            <p className="time">10:00 - 22:00</p>
          </div>
          <Divider />

          <div className="each-time">
            <p className="day">Sunday</p>
            <p className="time">Closed</p>
          </div>
        </div>

        <div
          className="contact-time-container address-container"
          id="SlideToStart"
        >
          <div className="each-time add">
            <p className="address">
              <strong>Postal Address:</strong>
            </p>
            <p className="time">Mánatún 35 105 Reykjavík</p>
          </div>
          <div className="each-time add">
            <p className="address">Restaurant:</p>
            <p className="time ">Grafarvogur 69, ON K2P 0G1, Reykjavík</p>
          </div>

          <div className="each-time add">
            <p className="address">Business Phone:</p>
            <p className="time">+1 844 295 0715</p>
          </div>
        </div>
        <div className="contact-address-container"></div>
      </div>
      <div className="contact-map-container " id="slideToStart">
      
        <Maps/>
      </div>
    </div>
  );
};

export default Contact;
