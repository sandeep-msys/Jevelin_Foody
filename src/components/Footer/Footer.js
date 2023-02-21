import "./Footer.scss";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="Footer-container">
      <div className="footer-inner-container">
        <img
          src="https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/logo.png"
          alt="/"
          className="footer-title-image"
        />
        <p className="footer-matter">
          WordPress Theme built by{" "}
          <strong className="strong">ShuffleHound</strong>
        </p>
        <div className="footer-icons-container">
          <FiFacebook className="icon" />
          <CiTwitter className="icon" />
          <AiOutlineInstagram className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
