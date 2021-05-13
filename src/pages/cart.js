import React, { Component } from "react";
import NavSection from "../components/organisms/nav-section";
import axios from "axios";
import { Container} from "reactstrap";
import "./cart.css";
import { FiShoppingCart } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import C from "../resource/values";

export default class cart extends Component {
  state = {
    cart: [],
    id: "",
    totalAmount: 0,
  };

  componentWillMount = async () => {
    let cart = await axios.post(C.SERVER_CALL + "/products/getcart");
    this.setState({ cart: cart.data.cart, id: cart.data.id });
    let amt = 0;
    for (let i = 0; i < this.state.cart.length; i++)
      amt += this.state.cart[i].total_price;
    this.setState({ totalAmount: amt });
  };

  deleteitem = async (id) => {
    await axios.delete(C.SERVER_CALL + `/products/deleteitemcart/${id}`);
    let cart = this.state.cart;
    for (let i = 0; i < cart.length; i++)
      if (cart[i].productId === id) {
        this.setState({ totalAmount: this.state.totalAmount - cart[i].price });
        cart.splice(i, 1);
        break;
      }
    this.setState({ cart: cart });
  };

  render() {
    return (
      <div style={{height:"1000px"}}>
        <NavSection />
        <Container>
          <div>
            <hr />
            <div className="header-cart">
              <h1>Cart</h1>
              <FiShoppingCart
                style={{ fontSize: "40px", marginLeft: "10px" }}
              />
            </div>
            <hr />
            <div className="main-cart">
              {this.state.cart.length > 0 && (
                <div className="sub-div-cart">
                  <h3 className="checkouth3-cart">
                    Subtotal : ₹ {this.state.totalAmount}
                  </h3>
                  <Link to={"/orderAddress"}>
                    <button
                      style={{ backgroundColor: "#FECC36", fontWeight: "600" }}
                      className="btn"
                    >
                      Proceed To Buy
                    </button>
                  </Link>
                </div>
              )}

              {this.state.cart.length > 0 ? (
                <ul className="ul-cart">
                  {this.state.cart.map((c) => (
                    <li className="li-cart">
                      <div className="cartBox">
                        <div>
                          <img src={c.displayImg} alt="product image" />
                        </div>
                        <div className="cartBox-inner">
                          <div>
                            <div className="display-content-cart">
                              <h6 className="producth3-cart">{c.prodName}</h6>
                              <p className="stock-cart margin-cart">In Stock</p>
                          </div>
                          </div>
                          <div className="information-cart">
                          <div className="display-cart">
                            <label>Price:</label>
                            <p>
                              <b> ₹ </b>
                              {c.price}
                            </p>
                          </div>
                          <div className="display-cart">
                            <label>Qty:</label>
                            <p>
                              <b></b>
                              {c.quantity}
                            </p>
                          </div>
                          </div>
                        </div>
                        <div>
                          <button
                              style={{
                                marginTop: "10px",
                                marginRight: "20px",
                                marginLeft: "10px",
                                width: "40px",
                                height: "40px",
                                textAlign: "center",
                              }}
                              className="btn"
                              onClick={() => {
                                this.deleteitem(c.productId);
                              }}
                            >
                              <MdDelete />
                            </button>
                        </div>
                      </div>
                    </li>
                  ))}
                  <hr />
                </ul>
              ) : (
                  <div className="ul-cart">
                    <h3 style={{ color: "white" }}>Cart is empty !!</h3>
                  </div>
                )}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
