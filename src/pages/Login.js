import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import logo from "../assets/images/new-logo.png";
import "./loginStyle.css";
import { loginUser } from "../actions/authActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class AdminLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
  if(nextProps.errors=="Incorrect password"){
    window.alert("Incorrect password")
    window.location.reload();
  }else if(nextProps.errors=="User NOt found  please signup"){
    window.alert("user not found")
    window.location.reload();
  }

    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
//
  onLogin(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData, this.props.history);
  }

  render() {
    return (
      <div style={{height:"1000px"}} className="containeradminlogin shadow p-3 mb-5 bg-white rounded text-center contain firstdiv">
        <div className=''>
       
        <h1 className="header1">USER Login</h1>
        <Form>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0 my-2 mx-2">
            <Label for="exampleEmail" className="mr-sm-2">
              Email
            </Label>
            <Input
              type="text"
              name="email"
              id="exampleEmail"
              placeholder="Enter Your email"
              onChange={this.onChange}
              required
            />
          </FormGroup>
          <br />

          <FormGroup className="mb-2 mr-sm-2 mb-sm-0 my-2 mx-2">
            <Label for="examplePassword" className="mr-sm-2">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Enter Your Password"
              onChange={this.onChange}
              required
            />
          </FormGroup>
          <br />
          <div className="submit">
            <Button
              className="btn-admin-login" color="primary"
              onClick={this.onLogin}
            >
              LOGIN
            </Button>
            <Link to='/signup'><div class="nav-tex">Signup</div></Link>
          </div>
        </Form>
        </div>
      </div>
    );
  }
}

AdminLogin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(withRouter(AdminLogin));
