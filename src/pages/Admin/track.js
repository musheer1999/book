import React, { Component } from "react";
// import NavSection from "../components/organisms/nav-section";
import { Container } from "reactstrap";
import { TiTick } from "react-icons/ti";
import { GrFormRefresh } from "react-icons/gr";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoMdCall } from "react-icons/io";
import "./track.css";
import axios from "axios";
import C from "../../resource/values";

class orderTracker extends Component {
  constructor() {
    super();
    this.state = {
      status:0,
      product: [],
      address: [],
      seller:{},
      sellerno:'',
      buyerno:''
    };
  }

  componentDidMount = async () => {
    console.log("track")
    let p = await axios.get(
      C.SERVER_CALL + `/seller/view/${this.props.match.params.id}`
    );
    console.log(p.data.order)
    let phonebuyer = await axios.get(C.SERVER_CALL + `/admin/userno/${p.data.order.buyer}`)
    let phoneseller = await axios.get(C.SERVER_CALL + `/admin/userno/${p.data.order.seller}`)
    console.log(phonebuyer.data.phoneNo)
    console.log(phoneseller.data.phoneNo)
    this.setState({
      seller:p.data.sellerAddress,
      sellerno:phoneseller.data.phoneNo,
      buyerno:phonebuyer.data.phoneNo,

    })
    this.setState({
      address: p.data.order.address
    })

    // console.log()
    let s=p.data.order.status
    console.log(s)
    if(s=="cancelled"){
      this.setState({status:10})
    }else
    if(s=="ready to pack"){
    this.setState({status:1})
    }else if(s=="ready to hand"){
      this.setState({status:2})
    }
    else if(s=="dispatch"){
      this.setState({status:3})
    }
    this.setState({ product: p.data.order });
    console.log(this.product)
    console.log(this.state.product)
  };
  render() {
    return (
      <div>
      
       
        <Container>
          {this.state.status==10?<h1>Your ordered is cancelled by the seller</h1>:
          <div className="box">
          <div>
          <div className="container">
            <div className="tracker-statusdiv">
              <h2 className="text-center">Order Status:</h2>
              <hr />
              <ul className="tracker-order-progressbar" >
                {this.state.status>=1?<li className="tracker-order-li active " >
                  <p className="tracker-icons active">
                 <TiTick
                      className="tracker-reacticon"
                      style={{
                        fontSize: "35px",
                        marginTop: "7px",
                        marginLeft: "2px",
                      }}
                    />
                  </p>

                  <p className="tracker-name active ">
                    Confirmed
                  </p>
  
                </li>:<li className="tracker-order-li" >
                  <p className="tracker-icons">
                  <GrFormRefresh
                      className="tracker-reacticon"
                      style={{
                        fontSize: "35px",
                        marginTop: "7px",
                        marginLeft: "2px",
                      }}
                    />
                  </p>

                  <p className="tracker-name  ">
                    Confirmed
                  </p>                                          
          
                </li>}
                {this.state.status>=2?<li className="tracker-order-li active" >
                  <p className="tracker-icons active">
                 <TiTick
                      className="tracker-reacticon"
                      style={{
                        fontSize: "35px",
                        marginTop: "7px",
                        marginLeft: "2px",
                      }}
                    />
                  </p>

                  <p className="tracker-name active ">
                    Ready to hand
                  </p>
            
                </li>:<li className="tracker-order-li" >
                  <p className="tracker-icons">
                  <GrFormRefresh
                      className="tracker-reacticon"
                      style={{
                        fontSize: "35px",
                        marginTop: "7px",
                        marginLeft: "2px",
                      }}
                    />
                  </p>

                  <p className="tracker-name  ">
                  Ready to hand
                  </p>
              
                </li>}
                {this.state.status>=3?<li className="tracker-order-li active" >
                  <p className="tracker-icons active">
                 <TiTick
                      className="tracker-reacticon"
                      style={{
                        fontSize: "35px",
                        marginTop: "7px",
                        marginLeft: "2px",
                      }}
                    />
                  </p>

                  <p className="tracker-name active ">
                  Dispatched
                  </p>
            
                </li>:<li className="tracker-order-li" >
                  <p className="tracker-icons">
                  <GrFormRefresh
                      className="tracker-reacticon"
                      style={{
                        fontSize: "35px",
                        marginTop: "7px",
                        marginLeft: "2px",
                      }}
                    />
                  </p>

                  <p className="tracker-name  ">
                  Dispatched
                  </p>
              
                </li>}
                {this.state.status>=4?<li className="tracker-order-li active" >
                  <p className="tracker-icons-last active">
                 <TiTick
                      className="tracker-reacticon"
                      style={{
                        fontSize: "35px",
                        marginTop: "7px",
                        marginLeft: "2px",
                      }}
                    />
                  </p>

                  <p className="tracker-name active ">
                  Delivered
                  </p>
                
                </li>:<li className="tracker-order-li" >
                  <p className="tracker-icons-last">
                  <GrFormRefresh
                      className="tracker-reacticon"
                      style={{
                        fontSize: "35px",
                        marginTop: "7px",
                        marginLeft: "2px",
                      }}
                    />
                  </p>

                  <p className="tracker-name  ">
                  Delivered
                  </p>
            
                </li>}
              </ul>
            </div>
            <hr />
          </div>
          </div>
         <div className="slider-box-1">
         <div className="OrdIt">
          <h1 className="tracker-heading">Order Item</h1>
          <hr/>
         <div className="OrderItem">
            <div>
            <img
                src={this.state.product.productImg}
                alt="Product"
                className="imgTrack"
              />
            </div>
            <div>
            <div className="details">
                     <h3>{this.state.product.productName}</h3>
                      <div className="trackItemInfo">
                        <div><h5>Categry:</h5></div>
                        <div><p>{this.state.product.category}</p></div>
                      </div>
                      <div className="trackItemInfo">
                        <div><h5>Sub-category:</h5></div>
                        <div><p>{this.state.product.subcategory}</p></div>
                      </div>
                      <div className="trackItemInfo">
                        <div><h5>Total Price:₹</h5></div>
                        <div><p>{this.state.product.total_price}</p></div>
                      </div>
                      <div className="trackItemInfo">
                        <div><h5>QTY:</h5></div>
                        <div><p>{this.state.product.quantity}</p></div>
                      </div>
                      <div className="trackItemInfo">
                        <div><h5>Buyer no:</h5></div>
                        <div><p>{this.state.buyerno}</p></div>
                      </div>
                      <div className="trackItemInfo">
                        <div><h5>Seller no:</h5></div>
                        <div><p>{this.state.sellerno}</p></div>
                      </div>
                    </div>
            </div>
          </div>
         </div>
          <div className="OrderSummary">
            <h1 className="tracker-summaryh1">Order Summary</h1>
            <hr/>
            <div className="trackItemInfo">
              <div><h5>Date:</h5></div>
              <div><p>{this.state.product.date}</p></div>
            </div>
            <div className="trackItemInfo">
              <div><h5>Order ID:</h5></div>
              <div><p>{this.state.product.ID}</p></div>
            </div>
            <div className="trackItemInfo">
              <div><h5>Total Amount:</h5></div>
              <div><p>₹{this.state.product.total_price}</p></div>
            </div>
            <div className="trackItemInfo">
              <div><h5>Qty:</h5></div>
              <div><p>{this.state.product.quantity} items</p></div>
            </div>
          </div>
          <div className="OrderSummary">
            <h1 className="tracker-cost-h1">Cost Summary</h1>
            <hr/>
            <div className="trackItemInfo">
              <div><h5>Total Goods Amount</h5></div>
              <div><p>{this.state.product.quantity}</p></div>
            </div>
            <div className="trackItemInfo">
              <div><h5>Price Per quantity{" "}</h5></div>
              <div><p>₹{this.state.product.netprice}</p></div>
            </div>
            <div className="trackItemInfo">
              <div><h5>Total{" "}</h5></div>
              <div><p>₹{this.state.product.total_price}</p></div>
            </div>

          </div>
          <div className="OrderSummary">
            <h1 style={{ fontFamily: " Arial, Helvetica, sans-serif", textAlign:"center", color: "red" }}>Delivery Address</h1>
            <hr/>
            <div className="trackItemInfo">
              <div><h5>House No </h5></div>
              <div><p>{this.state.address.hno}</p></div>
            </div>
            <div className="trackItemInfo">
              <div><h5> Address  </h5></div>
              <div><p>{this.state.address.line1}</p></div>
            </div>
            <div className="trackItemInfo">
              <div><h5>State </h5></div>
              <div><p>{this.state.address.state}</p></div>
            </div>
            <div className="trackItemInfo">
              <div><h5>City </h5></div>
              <div><p>{this.state.address.city}</p></div>
            </div>
          </div>
         


          <div className="OrderSummary">
            <h1 style={{ fontFamily: " Arial, Helvetica, sans-serif", textAlign:"center", color: "red" }}>Seller Address</h1>
            <hr/>
            <div className="trackItemInfo">
              <div><h5>House No </h5></div>
              <div><p>{this.state.seller.hno}</p></div>
            </div>
            <div className="trackItemInfo">
              <div><h5> Address  </h5></div>
              <div><p>{this.state.seller.line1}</p></div>
            </div>
            <div className="trackItemInfo">
              <div><h5>State </h5></div>
              <div><p>{this.state.seller.state}</p></div>
            </div>
            <div className="trackItemInfo">
              <div><h5>City </h5></div>
              <div><p>{this.state.seller.city}</p></div>
            </div>
          </div>

         </div>
          </div>}
        </Container>
      </div>
    );
  }
}
export default orderTracker;

