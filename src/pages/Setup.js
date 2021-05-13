import React, { Component } from "react";
import {
  Container,
  InputGroup,
  InputGroupAddon,
  Input,
  InputGroupText,
  Button,
} from "reactstrap";
import classnames from "classnames";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setup } from "../actions/authActions";
import NavSection from "../components/organisms/nav-section";
import "./setup.css";

class Setup extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      companyName: "",
      pinCode: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async (e) => {
  
    e.preventDefault();
    if(document.getElementsByName("name").value!=""){
    const userData = {
      name: this.state.name,
      companyName: this.state.companyName,
      pincode: this.state.pinCode,
    };
    this.props.setup(userData, this.props.history);}else{
      alert("pease write your name in the name sections")
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <NavSection />
        <Container>
          <div className="form-setup">
            <h2>Setup your account</h2>
            <div>
              <InputGroup size="sm" className="input-grp">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Name &nbsp; </InputGroupText>
                </InputGroupAddon>
                <Input
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.name,
                  })}
                  type="text"
                  name="name"
                  placeholder="your good name"
                  onChange={this.onChange}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </InputGroup>

              <InputGroup size="sm" className="input-grp">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Company name &nbsp; </InputGroupText>
                </InputGroupAddon>
                <Input
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.companyName,
                  })}
                  type="text"
                  name="companyName"
                  placeholder="your company name"
                  onChange={this.onChange}
                />
                {errors.companyName && (
                  <div className="invalid-feedback">{errors.companyName}</div>
                )}
              </InputGroup>

              <InputGroup size="sm" className="input-grp">
                <InputGroupAddon addonType="prepend">
                  {/* adding pincode instead of email */}
                  <InputGroupText>PinCode &nbsp; </InputGroupText>
                </InputGroupAddon>
                <Input
                  className={classnames("form-control form-control-lg", {
                    "is-invalid": errors.pincode,
                  })}
                  type="text"
                  name="pinCode"
                  placeholder="your area pincode"
                  onChange={this.onChange}
                />
                {errors.pincode && (
                  <div className="invalid-feedback">{errors.pincode}</div>
                )}
              </InputGroup>
              <br />
              <Button className="btn-setup" color="primary" onClick={this.handleSubmit}>
                Sign Up
              </Button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

Setup.propTypes = {
  setup: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { setup })(withRouter(Setup));
