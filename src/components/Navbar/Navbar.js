import "./Navbar.scss";
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
const Navbar = () => {
  const [yOffSet, setYoffSet] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.pageYOffset > 0) {
          setYoffSet(true);
        } else {
          setYoffSet(false);
        }
      },
      []
    );
  });
  const [state, setState] = useState(null);

  const buttonHandler = (i) => {
    if (state === i) {
      setState(null);
    }
    setState(i);
  };
  let TopFixNavData = [
    {
      name: "Home",
      link: "#Home",
    },
    {
      name: "About",
      link: "#About",
    },
    {
      name: "Menu",
      link: "#Menu",
    },
    {
      name: "Reservation",
      link: "#Reservation",
    },
    {
      name: "Contact",
      link: "#Contact",
    },
   
  ];
  return (
    <div
      className={
        yOffSet === true ? "navbar-with-white" : "navbar-with-background"
      }
    >
      <div className="navbar-title-container">
        {yOffSet ? (
          <img
          src="https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/C-_Users_Kolberga_Desktop_logo_dark.png"
          alt="/"
          className="navbar-title-image"
        />
          
        ) : (
          <img
            src="https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/logo.png"
            alt="/"
            className="navbar-title-image"
          />
        )}
      </div>

      <div className="navbar-menu-icons">
        <RxHamburgerMenu className="hamburger-icon" />
        <div className="navbar-menu-options-container ">
          
          {TopFixNavData.map((item, i) => (
            <div className="each-menu-option" key={i}>
              <a
                href={item.link}
                className={
                  state === i ? "menu-item active" : "menu-item"
                }
                onClick={() => {
                  buttonHandler(i);
                }}
              >
                {item.name}
              </a>
            </div>
          ))}
          <div className="navbar-social-icons-container">
            <AiOutlineSearch className="navbar-social-icon" />
            <FiFacebook className="navbar-social-icon" />
            <CiTwitter className="navbar-social-icon" />
            <AiOutlineInstagram className="navbar-social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
