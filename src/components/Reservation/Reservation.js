import { DatePicker, Divider, Form, Input, Select } from "antd";
import "./Reservation.scss";
const Reservation = () => {
  const enableReservationAnimations = () => {
    document.getElementById("slideToUp").style.animation =
    "slideToUp 1.6s";
  }
  return (
    <div className="Reservation-container" id='Reservation' onMouseOver={() => {
      enableReservationAnimations()
    }}>
      <div className="reservation-sub-container" id='slideToUp'>
        <div className="reservation-title-container">
          <h1 className="reservation-title">Select a Date & Book Now</h1>
          <Divider className="reservation-matter">
            <p className="divider">
              We will confirm order via <br className="brake" /> E-mail or Phone
            </p>
          </Divider>
        </div>
        <div className="reservation-form-container">
          <Form>
            <div className="names-container">
              <Form.Item
                labelCol={{ span: 24 }}
                label="First Name"
                required={true}
              >
                <Input />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Last Name"
                required={true}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="contact-container">
              <Form.Item
                labelCol={{ span: 24 }}
                label="E-Mail Address"
                required={true}
              >
                <Input />
              </Form.Item>
              <Form.Item labelCol={{ span: 24 }} label="Phone Number">
                <Input />
              </Form.Item>
            </div>
            <div className="extra-container">
              <Form.Item
                labelCol={{ span: 24 }}
                label="dd-mm-yyyy"
                required={true}
              >
                <DatePicker placeholder="" />
              </Form.Item>
              <Form.Item labelCol={{ span: 24 }} label="Time" required={true}>
                <Select>
                  <Select.Option value="demo">09:00</Select.Option>
                  <Select.Option value="demo">09:30</Select.Option>
                  <Select.Option value="demo">10:00</Select.Option>
                  <Select.Option value="demo">10:30</Select.Option>
                  <Select.Option value="demo">11:00</Select.Option>
                  <Select.Option value="demo">11:30</Select.Option>
                  <Select.Option value="demo">12:00</Select.Option>
                  <Select.Option value="demo">12:30</Select.Option>
                  <Select.Option value="demo">01:00</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }}
                label="Persons"
                required={true}
              >
                <Select>
                  <Select.Option value="demo">1 Pesron</Select.Option>
                  <Select.Option value="demo">2 Persons</Select.Option>
                  <Select.Option value="demo">3 Persons</Select.Option>
                  <Select.Option value="demo">4 Persons</Select.Option>
                  <Select.Option value="demo">5 Persons</Select.Option>
                  <Select.Option value="demo">6 Persons</Select.Option>
                  <Select.Option value="demo">7 Persons</Select.Option>
                  <Select.Option value="demo">8 Persons</Select.Option>
                  <Select.Option value="demo">9 Persons</Select.Option>
                </Select>
              </Form.Item>
            </div>
          </Form>
          <div className="submit-button-container">
            <button className="submit-button">BOOK NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
