import { Divider } from "antd";
import "./Menu.scss";
const Menu = () => {
  const enableMenuAnimations = () => {
    document.getElementById("slideToTop").style.visibility = "visible";
    document.getElementById("slideToTop").style.animation = "slideToTop 3s";
  };
  return (
    <div className="Menu-container" id="Menu">
      <div
        className="menu-inner-container"
        onMouseOver={() => {
          enableMenuAnimations();
        }}
        id="slideToTop"
      >
        <div className="menu-title-container">
          <img
            src="https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/Layer-816.png"
            alt="/"
            className="menu-title-image"
          />
          <h1 className="menu-title-heading">Enjoy The Best Cuisine</h1>
          <Divider className="menu-title-matter">on this planet</Divider>
        </div>

        <div className="menu-dish-container">
          <div className="menu-starters-container">
            <p className="menu-starters-heading">Starters</p>
            <div className="each-menu-starters-container">
              <div className="each-menu-title-container">
                <p className="menu-starters-name">Proin gravida gravida</p>
                <p className="menu-starters-rate">$10.50</p>
              </div>
              <Divider className="divider"></Divider>
              <p className="menu-starters-matter">
                Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan
                vitae, dapibus et.
              </p>
            </div>

            <div className="each-menu-starters-container">
              <div className="each-menu-title-container">
                <p className="menu-starters-name">Proin gravida gravida</p>
                <p className="menu-starters-rate">$10.50</p>
              </div>
              <Divider className="divider"></Divider>
              <p className="menu-starters-matter">
                Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan
                vitae, dapibus et.
              </p>
            </div>

            <div className="each-menu-starters-container">
              <div className="each-menu-title-container">
                <p className="menu-starters-name">Proin gravida gravida</p>
                <p className="menu-starters-rate">$10.50</p>
              </div>
              <Divider className="divider"></Divider>
              <p className="menu-starters-matter">
                Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan
                vitae, dapibus et.
              </p>
            </div>
          </div>

          <div className="menu-starters-container">
            <p className="menu-starters-heading">Mains</p>
            <div className="each-menu-starters-container">
              <div className="each-menu-title-container">
                <p className="menu-starters-name">Proin gravida gravida</p>
                <p className="menu-starters-rate">$10.50</p>
              </div>
              <Divider className="divider"></Divider>
              <p className="menu-starters-matter">
                Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan
                vitae, dapibus et.
              </p>
            </div>

            <div className="each-menu-starters-container">
              <div className="each-menu-title-container">
                <p className="menu-starters-name">Proin gravida gravida</p>
                <p className="menu-starters-rate">$10.50</p>
              </div>
              <Divider className="divider"></Divider>
              <p className="menu-starters-matter">
                Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan
                vitae, dapibus et.
              </p>
            </div>

            <div className="each-menu-starters-container">
              <div className="each-menu-title-container">
                <p className="menu-starters-name">Proin gravida gravida</p>
                <p className="menu-starters-rate">$10.50</p>
              </div>
              <Divider className="divider"></Divider>
              <p className="menu-starters-matter">
                Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan
                vitae, dapibus et.
              </p>
            </div>
          </div>
        </div>
        <div className="menu-button-container">
          <button className="menu-button">VIEW FULL MENU</button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
