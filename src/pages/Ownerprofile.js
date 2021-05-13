import React, { Component } from "react";
import {
  Col, Button, Form, FormGroup, Label, Input, FormText, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Alert ,Row,  
} from 'reactstrap';
import NavSection from "../components/organisms/nav-section";
import "./profile.css";
import { Link } from "react-router-dom";
import leftarrow from "../assets/images/leftarrow.png";
import Test from "../components/molecules/profileModal/test";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

import { withRouter } from "react-router-dom";
import {
  Toast,
  ToastBody,
  ToastHeader
} from "reactstrap";
import C from "../resource/values"
import "./Ownerprofile.css"

class Ownerprofile extends Component {
  state = {
    // user: {},
    name: "",
    email: "",
    gstin: "",
    address: [],
    pincode: "",
    _id: "",
    isdocs: false,
    docs: [],
    docsVerify: [],
    namechanged: false
  };

  documents = new FormData()

  componentDidMount = async () => {
    let user = await axios.get(C.SERVER_CALL + '/auth/profile');
    console.log(user);
    this.setState({
      name: user.data.name,
      email: user.data.email,
      pinCode:user.data.pinCode,
      gstin: user.data.bankDetails,
      address: user.data.address,
      pincode: user.data.pinCode,
      _id: user.data._id,
      docs: user.data.documents,
      docsVerify: user.data.docInfo
    });
  };

  closemodal = () => {
    this.setState({ isdocs: false })
  }

  onLogoutClick(e) {
    e.preventDefault();
    console.log(this.props);
    console.log(this.props.history)
    this.props.logoutUser(this.props.history);
  }
  getUpdatedDetails = async (value, type) => {
    if (type === "name") {
      this.setState({ name: value });
      await axios.post(C.SERVER_CALL + '/auth/updatedetails', { name: value, type: type });
      this.setState({ namechanged: true })
      setTimeout(() => {
        this.setState({ namechanged: false })
      }, 3000)
    }
    else if (type === "gstin") {
      this.setState({ gstin: value });
      await axios.post(C.SERVER_CALL + '/auth/updatedetails', { bankDetails: value });
    }
    else {
      this.setState({ pincode: value });
      await axios.post(C.SERVER_CALL + '/auth/updatedetails', { pinCode: value });
    }

  };

  render() {
    return (
      <div>
        <NavSection />
        {this.state.namechanged ? (
          <div
            style={{
              position: "absolute",
              right: "3%",
              zIndex: "10",
              width: "300px",
            }}
          >
            <div className="p-3 my-2 rounded">
              <Toast>
                <ToastHeader>
                  <em>UserName Changed</em>
                </ToastHeader>
                <ToastBody>
                  Your UserName is Changed
                </ToastBody>
              </Toast>
            </div>
          </div>
        ) : null}
        <div className="li-p bread-p">
          <div>
            <Link to={"/dashboard"}>
              <img alt='' src={leftarrow} style={{ width: "30px" }} />
            </Link>
          </div>
          <div>
            <Link to={"/dashboard"}>&nbsp;&nbsp;Dashboard </Link>&nbsp;/ Owner Profile
          </div>
        </div>
        <div className="div-p">
          <ul className="ul-p">
            <li className="li-p">
              <div className="inner-div-p">
              <h2 className="h2-p"><b>User Details:</b></h2>
                <div style={{ display: "flex" }}>
                  <div className="col-md-6">
                    <h3 className="h3-p">Name :</h3>
                    <p className="p-p">{this.state.name}</p>
                    <h3 className="h3-p">Email :</h3>
                    <p className="p-p">{this.state.email}</p>
                 
                  </div>
                </div>
                <div>
                  <Test 
                     func={this.getUpdatedDetails}
                    detailsType="Username"
                    type="EDIT"
                    oldDet={this.state.name}
                   />
                </div>
              </div>
            </li>
            <li className="li-p">
              <div className="inner-div-p">
                <div style={{ display: "flex" }}>
                  <div className="col-md-6">
                   <h2 className="h2-p"><b>Address:</b></h2>
                    {
                      this.state.address.map(add => (
                        <div className="single-address">
                          <div>
                            <span>House Number: </span>
                            <span>Street Address:</span>
                            <span>City:</span>
                            <span>State:</span>
                            <span>pinCode:</span>
                          </div>
                          <div>
                            <span>{add.hno}</span>
                            <span>{add.line1}</span>
                            <span>{add.city}</span>
                            <span>{add.state}</span>
                            <span>{add.pinCode}</span>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div style={{display:"flex",justifyContent:"flex-end"}}>
                <Link to={`/address`}>  <Button 
                            style={{
                                background: "#007bff",
                                color: "#fff",
                                fontWeight: "400",
                                border: "none",
                                fontSize: "18px",
                                borderRadius: "5px",
                                position: "relative",
                                padding: '10px 38px',
                                margin: '1rem 1rem',
                                fontFamily: 'Proxima Nova Th'
                                        }} 
                           >ADD</Button>
          </Link>
                </div>

              </div>
            </li>
          </ul>
        </div>
       
    
      </div >
      
    );
  }
}

Ownerprofile.propTypes = {
  logoutUser: PropTypes.func.isRequired

};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(withRouter(Ownerprofile));