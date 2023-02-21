import { Divider } from "antd";
import Carousel from "react-bootstrap/Carousel";
import "./Customer.scss";
const Customer = () => {
  return (
    <div className="Customer-container">
      <div className="customer-title-container">
        <h1 className="customer-heading">Customer</h1>
        <Divider className="customer-matter">stories about us</Divider>
      </div>

      <Carousel fade slide={false} className="curosel-container">
        <Carousel.Item className="each-curosel-item">
          <div className="curosel-image-container">
            <img
              className="d-block w-100 curosel-avatar"
              src="https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/01/andrew-dong-387384.png"
              alt="First slide"
            />
          </div>
          <div className="curosel-matter-container">
            <h1 className="curosel-matter">
              Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan
              vitae, dapibus et.Lorem ipsum dolor sit amet purus vitae libero
              lacinia accumsan vitae, dapibus et.
            </h1>
            <p className="curosel-name">Brandon</p>
            <p className="curosel-designation">Wolf</p>
            <p className="curosel-number">99</p>
          </div>
        </Carousel.Item>

        <Carousel.Item className="each-curosel-item">
          <div className="curosel-image-container">
            <img
              className="d-block w-100 curosel-avatar"
              src="https://jevelin.shufflehound.com/foodie/wp-content/uploads/sites/17/2018/03/matheus-ferrero-288182-unsplash2.png"
              alt="Second slide"
            />
          </div>
          <div className="curosel-matter-container">
            <h1 className="curosel-matter">
              Lorem ipsum dolor sit amet purus vitae libero lacinia accumsan
              vitae, dapibus et.Lorem ipsum dolor sit amet purus vitae libero
              lacinia accumsan vitae, dapibus et.
              dolor sit amet purus vitae libero
              lacinia accumsan vitae, dapibus et.
            </h1>
            <p className="curosel-name">Katey Gallardo</p>
            <p className="curosel-designation">Proud Client / CEO</p>
            <p className="curosel-number">99</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Customer;
