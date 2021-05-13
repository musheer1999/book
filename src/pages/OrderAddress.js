import React, { Component } from "react";
import NavSection from "../components/organisms/nav-section";
import { Container,Table } from "reactstrap";
import "./OrderAddress.css";
import { MdLocationOn, MdDelete } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";
import C from "../resource/values";

class OrderAddress extends Component {
  constructor() {
    super();
    this.state = {
      address: [],
      cart: [],
      id: "",
      checkedId: "",
      selectedAddr: [],
      subTotal: 0,
    };
  }

  componentDidMount = async () => {

    var address = await axios.get(C.SERVER_CALL + "/cart/address");
    if (address.data.length === 0)
      return this.props.history.push("/billingAddress");
    this.setState({ address: address.data });
    for (let i = 0; i < address.data.length; i++) {
      this.setState({
        checkedId: address.data[i]._id,
        selectedAddr: this.state.address[i],
      });
      break;
    }
    let cart = await axios.post(C.SERVER_CALL + "/products/getcart");
    console.log(cart.data)
    this.setState({ cart: cart.data.cart, id: cart.data.id });
    console.log(this.state.cart)
    for (let index = 0; index < this.state.cart.length; index++) {
      // this.state.cart[index].price +=
      //   this.state.cart[index].gst * 0.01 * this.state.cart[index].price;
        console.log(this.state.cart)
        let discount = this.state.cart[index].discount *0.01 * this.state.cart[index].price
        let tax = this.state.cart[index].gst * 0.01 * this.state.cart[index].price
        this.state.cart[index].price =   this.state.cart[index].price+tax
        this.state.cart[index].price =   this.state.cart[index].price-discount

        console.log("discount : " + discount)
        console.log("tax : " + tax)
        console.log("price : " +  this.state.cart[index].price )
      this.setState({
        cart: this.state.cart,
      });
    }
    let subTotal = 0;
    this.state.cart.forEach((i) => {
      subTotal += i.total_price;
    });
    this.setState({ subTotal });
  };

  removeAddress = async (id) => {
    let res = await axios.delete(C.SERVER_CALL + `/cart/add/${id}`);
    if (res) window.location.reload();
  };

  selectAddress = async (id) => {
    this.setState({ checkedId: id });
    for (let i = 0; i < this.state.address.length; i++) {
      if (this.state.address[i]._id === this.state.checkedId) {
        this.setState({ selectedAddr: this.state.address[i] });
        break;
      }
    }
  };

  render() {
    return (
      <div style={{height:"1000px"}}>
        <NavSection />
        <div className="container">
          <ul className="order-progressbar">
            <li className="order-li active">Step 1</li>
            <li className="order-li">Step 2</li>
            <li className="order-li">Step 3</li>
          </ul>
        </div>
        <Container>
          <div className="order-Main-div">
            <div className="order-subaddress">
              <div className="order-address">
                <h3 className=" order-addressh3">
                  Shippment Address
                  <MdLocationOn />
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {this.state.address.map((addr) => (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                      }}
                    >
                      <input
                        type="radio"
                        checked={this.state.checkedId === addr._id}
                        onChange={() => {
                          this.selectAddress(addr._id);
                        }}
                      />

                      <p className="order-addressp">
                        {addr.hno} <br />
                        {addr.line1} <br />
                        {addr.city} <br />
                        {addr.state}
                      </p>
                      <div>
                        <button
                          className="address-deletebtn"
                          onClick={() => {
                            this.removeAddress(addr._id);
                          }}
                        >
                          <MdDelete style={{ marginTop: "-5px" }} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to={{
                    pathname: "/billingAddress",
                    state: { prevPath: window.location.pathname },
                  }}
                >
                  <button
                    style={{ backgroundColor: "#FECC36" }}
                    className="order-addressbtn btn"
                  >
                    Add address
                  </button>
                </Link>
              </div>
              <label style={{ fontSize: "40px", marginTop: "20px" }}>
                List Of Items
              </label>
              <br />
              <div className="orderlistofitem">
                            {this.state.cart.map((c) => (
                                <div className="order-subitems" style={{ padding: "10px" }}>
                    <img src={c.displayImg} alt="" className="order-img" />
                    <div className="order-content">
                      <p className="order-itemname">{c.prodName}</p>

                      <p>Qty : {c.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{display:"flex",width:"100%",flexDirection:"column"}} className="order-subdetails">
              <div style={{overflow: "scroll"}}  className="order-details">
                <div>
                <h2 className="text-center">Summary</h2>
                <table >
          
              <tr>
                <th>Name.</th>
                                        {/*<th>Price.</th>*/}
                <th>Tax %.</th>
                <th>Discount %.</th>
               
                <th>Quantity.</th>
                <th>Total Price.</th>
              </tr>
         
          
          
             
            
                {this.state.cart.map((i) => {
                  return (
                  
                   
                      <tr>
                <td>{i.prodName}</td>
                          {/*<th>{i.price}</th>*/}
               <td>{i.gst}</td>
               <td>{i.discount}</td>
              
               <td>{i.quantity}</td>
               <td>{i.total_price}</td>
              </tr>
                   
                  );
                })}
                 
            </table>
                <div className="order-totalcontent">
                  <h4 className="order-totalh1">SubTotal:</h4>
                  <h5 className="order-totalp">{this.state.subTotal}</h5>
                </div>
                </div>
              </div>
              <Link
                to={{
                  pathname: "/paymentDetails",
                  state: {
                    address: this.state.selectedAddr,
                    subTotal: this.state.subTotal,
                  },
                }}
              >
                <button
                  style={{ backgroundColor: "#FECC36" }}
                  className="order-continue btn"
                >
                  Proceed to Payment
                </button>
              </Link>
            </div>
          </div>
        </Container>
            
            <div>&nbsp;&nbsp;</div>
            <div>&nbsp;&nbsp;</div>
            <div>&nbsp;&nbsp;</div>
      </div>
    );
  }
}
export default OrderAddress;
