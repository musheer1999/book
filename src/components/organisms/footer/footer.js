import React from "react";
import "./style.css";
// import logo from "../../../assets/images/new-logo.png";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import UP from "../../../assets/images/keyboard_arrow_up 2.png";
import FB from "../../../assets/images/fb.svg";
import LINKEDIN from "../../../assets/images/linkedin.svg";
import INSTA from "../../../assets/images/insta.svg";

export default function footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="footer-backtotop text-center" onClick={scrollTop}>
        <p
          style={{
            color: "#FEF200",
            textAlign: "center",
            margin: "0",
            padding: "0",
            marginTop: "-15px",
          }}
        >
          back to the top
        </p>
      </div>
      <div className="footer">
              <div className="flexbox-container-1" style={{ display: "flex", flexWrap: "wrap" }}>
                  <div className="flexbox-items flexbox-items-1">
                    <img className="footer-logo" src={logo} alt="logo" />
                    <h3>IQRA</h3>
            <div className="footer-icons-div">
              <p className="contact-us-footer">
                <b>Connect with Us</b>
              </p>
              <div className="footer-icons">
                <a href="">
                <img
              
                  src={INSTA}
                  alt=""
                  style={{ fontSize: "5px", cursor: "pointer" }}
                />
             </a>
             <a href="">
                <img
                  src={FB}
                  alt=""
                  style={{
                  fontSize: "3px",
                  marginLeft: "15px",
                  cursor: "pointer",
                  }}
                />
                </a> 
               <a href="">
                <img
                  src={LINKEDIN}
                  alt=""
                  style={{
                    fontSize: "6px",
                    marginLeft: "15px",
                    cursor: "pointer",
                  }}
                />
                </a>
              </div>
            </div>
          </div>
                  <div className="flexbox-items flexbox-items-2">
              <ul className="footer-ui-1">Search Your choice !!</ul>
              <ul><Link to="/dashboard/sellercentral">Online Bookstore</Link></ul>
                <ul>Terms and Conditions</ul>
                <ul><Link to="/about">About</Link></ul>
          </div>
                  <div className="flexbox-items flexbox-items-3">
                      <p>
                          <h5><b>Contact Us : </b></h5><a href="tel:+918882664898"><h5><b>+91-1234567891</b></h5></a>
                          <h5><a href="mailto:info@ucliq.in">info@bookstore.in</a></h5>
            </p>
          </div>
        </div>
        <div className="footer-terms text-center">
          <p style={{ marginTop: "20px" }}>
            &copy; Terms and Condition of use &amp; sale
          </p>
        </div>
      </div>
    </>
  );
}
