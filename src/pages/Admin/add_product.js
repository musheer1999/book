import React, { Component } from "react";
import ReactDOM from "react-dom";
import Sidebar from "./sideBar";
import NavSection from "../../components/organisms/nav-section/index";
import axios from "axios";
import C from '../../resource/values';
import { Link } from "react-router-dom";
import leftarrow from '../../assets/images/leftarrow.png';

import { Toast, ToastBody, ToastHeader } from "reactstrap";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Spinner,
} from "reactstrap";
import "./add_product.css";

class sellproduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: "",
      price: 0,
      qty: 0,
      // photos: [],
      category: "Novel",
      subcat: "Edible Oils and Ghee",
      cats: ["Science","Literature","History","Geography","Civics","Kids","Novel","Audiobooks","Encyclopedia","Upsc","Jee","Neet"],
      subcats: [],
      product_desc: "",
      discount: 0,
      seller_name: "",
      // totalprice:0,
      gst: 0,
      prodAdded: false,
      loading: false,
      error: false
    };

  }




  componentDidMount = async () => {
    // var a = await axios.post(C.SERVER_CALL + '/products/getallcats');
    // a = a.data;
    // this.setState({ cats: a });
    // for (let i = 0; i < this.state.cats.length; i++)
    //   if (this.state.cats[i].name == "Food - Staples") {
    //     this.setState({ subcats: this.state.cats[i].listofcat });
    //     break;
    //   }
  };

  handleChange = (event) => {
console.log(event.target.value)
console.log(event.target.name)

    this.setState({ [event.target.name]: event.target.value },()=>{
      console.log(this.state.category)
      
    });
    
 
  };

  handleSubmit = async (event) => {
    event.preventDefault()
    console.log(this.state.category)
    event.preventDefault();
    this.setState({ loading: !this.state.loading });
    let item = {
      product_name: this.state.product_name,
      category: this.state.category,
      subcat: this.state.subcat,
      qty: this.state.qty,
      price: this.state.price,
      seller_name: this.state.seller_name,
      description: this.state.product_desc,
      discount: this.state.discount,
      // totalprice:this.state.totalprice,
      gst: this.state.gst
    };
    var a = await axios.post(
      C.SERVER_CALL + "/admin/addproduct",
      item
    );


    if (a) {
      this.setState({ loading: !this.state.loading });
      this.setState({ prodAdded: !this.state.prodAdded });
      ReactDOM.findDOMNode(this.messageForm).reset();
      this.setState({ allimg: [] });
      setTimeout(() => {
        this.setState({ prodAdded: !this.state.prodAdded });
      }, 2000);
    } else {
      this.setState({ error: true })
      setTimeout(() => {
        this.setState({ loading: !this.state.loading });
        this.setState({ error: false })
      }, 2000);
    }
  };

  render() {
    return (
        <div>
        {
          this.state.error ?
            <div className="error-div text-center">
              <p style={{ color: "red", marginTop: "10px", fontSize: "17px" }}>
                Something Went Wrong Please Try Again
              </p>
            </div>
            : <></>
        }
        {this.state.loading ? (
          <>
            <div className="loader-sell">
              <Spinner
                className="loader"
                animation="border"
                role="status"
                variant="light"
              />
              <div className="loader-content">
                Product is adding.
                <br />
                It will take few minutes.
              </div>
            </div>
          </>
        ) : null}

        {this.state.prodAdded ? (
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
                  <em>Product Added</em>
                </ToastHeader>
                <ToastBody>{this.state.product_name} is uploaded.</ToastBody>
              </Toast>
            </div>
          </div>
            ) : null}
            <div>&nbsp;</div>
            <div className="container-add shadow p-3 mb-5 bg-white rounded">
                <Sidebar />
                <hr></hr>
          <Form
            onSubmit={this.handleSubmit}
            ref={(form) => (this.messageForm = form)}
                >
                    <h3>Enter the details</h3>
                    <div>&nbsp;</div>
            <FormGroup row>
              <Label for="exampleText" sm={2}>
                Seller Name
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="seller_name"
                  id="exampleText"
                  placeholder="Enter Author Name"
                  onChange={this.handleChange}
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleText" sm={2}>
                Product Name
              </Label>
              <Col sm={10}>
                <Input
                  type="text"
                  name="product_name"
                  id="exampleText"
                  placeholder="Enter Product Name"
                  onChange={this.handleChange}
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleText" sm={2}>
                Price
              </Label>
              <Col sm={10}>
                <Input
                  type="number"
                  name="price"
                  id="exampleNumber"
                  placeholder="Enter Price"
                  onChange={this.handleChange}
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleText" sm={2}>
                Quantity
              </Label>
              <Col sm={10}>
                <Input
                  type="number"
                  name="qty"
                  id="exampleNumber"
                  placeholder="Enter quantity"
                  onChange={this.handleChange}
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleSelect" sm={2}>
                Category
              </Label>
              <Col sm={10}>
                <Input
                  type="select"
                  name="category"
                  id="exampleSelect"
                  placeholder="choose one"
                  onChange={this.handleChange}
                  required
                >
                  {this.state.cats.map((i) => (
                    <option value={i}>{i}</option>
                  ))}
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleText" sm={2}>
                Product Description
              </Label>
              <Col sm={10}>
                <Input
                  type="textarea"
                  name="product_desc"
                  id="exampleText"
                  placeholder="Enter Product Description"
                  onChange={this.handleChange}
                  required
                />
              </Col>
            </FormGroup>
       
            <FormGroup row>
              <Label for="exampleText" sm={2}>
                GST Amount
              </Label>
              <Col sm={10}>
                <Input
                  type="number"
                  name="gst"
                  id="exampleText"
                  placeholder="Enter GST Amount"
                  onChange={this.handleChange}
                  required
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleText" sm={2}>
                Discount %
              </Label>
              <Col sm={10}>
                <Input
                  type="number"
                  name="discount"
                  id="exampleText"
                  placeholder="Enter Discount Rate"
                  onChange={this.handleChange}
                  required
                />
              </Col>
            </FormGroup>
         
                    <button class="btn btn-submit btn-primary">SUBMIT</button>
          </Form>
        </div>
      </div>
    );
  }
}

export default sellproduct;
