import React, { Component } from 'react'
import NavSection from "../components/organisms/nav-section";
import { Container, Button, Form, FormGroup, Label, Input,  Spinner } from 'reactstrap'

import './billingAddress.css'
import axios from 'axios'
import C from '../resource/values';

class Address extends Component {
  constructor() {
    super();
    this.state = {
      hno: "",
      line1: "",
      city: "",
      state: "",
      pinCode:"",
      updated: false,
      prevPath: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = (event) => {
    
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      }
    )
    
  }

  componentDidMount = async () => {

    if (this.props.location.state) {
      this.setState({ prevPath: this.props.location.state.prevPath })
    } else {
      this.setState({ prevPath: "/orderAddress" })
    }
  }

  addAddress = async (event) => {
    event.preventDefault();
    this.setState({ loading: !this.state.loading })
    
    var a = await axios.post(C.SERVER_CALL + '/cart/address/push', {
      hno: this.state.hno,
      line1: this.state.line1,
      city: this.state.city,
      state: this.state.state,
      pinCode:this.state.pinCode
    });
    if (a) {
      this.setState({ loading: !this.state.loading })
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div>
        {
          this.state.loading
            ?
            <>
              <div className="loader-sell">
                <Spinner className='loader' animation="border" role="status" variant="light" />
                <div className='loader-content'>
                  Updating....
                </div>
              </div>
            </>
            :
            null
        }

        <NavSection />
        <Container>
          <h3 className='text-center'>Billing Address</h3>
          <Form className='billing-form' ref={form => this.messageForm = form}>
            <FormGroup >
              <Label for="exampleEmail">House Number</Label>
              <Input type="text" name="hno" id="exampleEmail" onChange={this.handleChange} placeholder="Enter The House Number" />
            </FormGroup>
            <FormGroup >
              <Label for="exampleEmail">Address Line</Label>
              <Input type="textarea" name="line1" id="exampleEmail" onChange={this.handleChange} placeholder="Address Line" />
            </FormGroup>
            <FormGroup >
              <Label for="exampleEmail">City</Label>
              <Input type="textarea" name="city" id="exampleEmail" onChange={this.handleChange} placeholder="Enter Your City" />
            </FormGroup>
            <div className='billing-details'>
              <FormGroup>
                <Label for="exampleEmail">State</Label>
                <Input type="textarea" name="state" id="exampleEmail" onChange={this.handleChange} placeholder="Enter Your State" />
              </FormGroup>

            </div>
            <div className='billing-details'>
              <FormGroup>
                <Label for="exampleEmail">Pin Code</Label>
                <Input type="textarea" name="pinCode" id="exampleEmail" onChange={this.handleChange} placeholder="Enter Your Pin Code" />
              </FormGroup>

            </div>
            <Button className="btn-address" color="primary" onClick={this.addAddress}>Submit</Button>
          </Form>
        </Container>
            <div>&nbsp;&nbsp;</div>
            <div>&nbsp;&nbsp;</div>
            <div>&nbsp;&nbsp;</div>
      </div>
    )
  }
}
export default Address