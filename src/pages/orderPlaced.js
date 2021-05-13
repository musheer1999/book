import React, { Component } from "react";
import NavSection from "../components/organisms/nav-section";
import { Container } from "reactstrap";
import "./orderPlaced.css";
import { MdLocationOn } from "react-icons/md";
import { FaTruckMoving } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import axios from "axios";
import C from "../resource/values";

class orderPlaced extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  componentDidMount = async () => {
    let cart = await axios.post(C.SERVER_CALL + "/products/getcart");
    this.setState({ cart: cart.data.cart, id: cart.data.id });
  };

  render() {
    return (
      <div>
        <NavSection />
        <Container>
          <h1 className="text-center">Thank You!</h1>
          <h4 className="text-center">
            Your Order  Has Been Placed{" "}
          </h4>
     
                <a href='/'><button className="placed-button btn btn-primary" style={{ color: "white", border: "blue" }}>
            Continue Shopping
          </button></a>
          {/* <div className="placed-details">
            <div className="placed-shipping col-md-4">
              <h5>
                <strong>
                  Shipping
                  <MdLocationOn />
                </strong>
              </h5>
              <p>
                <b>Jonas Kahnwald</b>
              </p>
              <p style={{ fontSize: "12px" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
              <p style={{ fontSize: "12px" }}>+917854584567</p>
            </div>
            <div className="placed-method col-md-4">
              <h5>
                <strong>
                  Shipping Method
                  <FaTruckMoving />
                </strong>
              </h5>
              <p style={{ fontSize: "15px" }}>
                <b>Payment Method</b>:COD
              </p>
              <p style={{ fontSize: "15px" }}>
                <b>Estimated Delivery</b>:Within 5-6 business days
              </p>
            </div>
          </div> */}
        </Container>
      </div>
    );
  }
}
export default orderPlaced;
