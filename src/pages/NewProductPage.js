import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  Spinner,
  Toast,
  ToastHeader,
  ToastBody,
} from "reactstrap";
import NavSection from "../components/organisms/nav-section/index";
import C from "../resource/values";
import axios from "axios";
import store from "../store";
import { parse } from "@fortawesome/fontawesome-svg-core";
export default class NewProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      added: false,
      isAuth: false,
      minqty: 0,
      total_price:0,
      finalprice:0,
      discounts:0,
      isDocVerified:false,
      isAuthenticated:false
    };
  }

  btnStyleText = {
    backgroundColor: "white",
    padding: "6px",
    border: "0",
    color: "#fea500",
    fontWeight: "700",
    fontSize: "28px",
    margin: "0",
  };

  btnStyle = {
    backgroundColor: "white",
    padding: "6px",
    border: "0",
    color: "black",
    fontSize: "28px",
    margin: "0",
  };

  smallText = {
    fontSize: "16px",
    fontWeight: "400",
  };

  content = `
  • No Cost EMI: Avail No Cost EMI on select cards for orders above ₹3000.
• Bank Offer (2): 10% Amazon Pay Cashback on purchase of Rs.500 or more with newly saved VISA cards.
• 5% Instant discount with HSBC Cashback card 
• Cashback: Get 10% up to ₹150 back, pay with Amazon Pay UPI. Valid once per customer on 1st Amazon Pay UPI transaction on App. Click here to check eligibility.
• Partner Offers (4): Get FLAT 5% BACK with Amazon Pay ICICI Bank Credit card for Prime members. Flat 3% BACK for non-Prime members.
• Buy now & pay next month at 0% interest or pay in EMIs with Amazon Pay Later. Instant credit upto ₹20,000. Check eligibility here! 
  `;

  componentWillMount= async() =>{
   
   let res= await axios.get(C.SERVER_CALL + `/products/${this.props.match.params.id}/public`)
      console.log(res)
        // console.log(res.data);
        this.setState({
          product: res.data.product,
          minqty: res.data.product.qty,
        });
console.log(res.data)
  
        this.setState({
          total_price:parseInt(this.state.product.totalprice)*parseInt(this.state.minqty),
          discount:this.state.product.discount
        })


        
        console.log(this.state)

        let users = await axios.get(C.SERVER_CALL +"/auth/profile")
        console.log(users)

          this.setState({
            isDocVerified:users.data.isDocVerified,
            isAuthenticated:users.data.isAuthenticated
          })
     
    
  }

  showPrices() {
    
    if (store.getState().auth.isAuthenticated == false) {
      return "Please Sign in.";
    } else {
      return (
        "Rs. " +
        parseInt(
          this.state.product.totalprice
        )
      );
    }
  }

  addToCart = async (shouldBuyNow) => {
    console.log(store.getState().auth.user.isDocVerified)
 
      let res = await axios.post(C.SERVER_CALL + "/products/addtocart", {
        productId: this.props.match.params.id,
        quantity: this.state.minqty,
        displayImg: this.state.product.images[0].image,

        price: this.state.product.totalprice,
        netprice:this.state.product.totalprice,
        total_price:parseInt(this.state.product.totalprice)*parseInt(this.state.minqty),
        prodName: this.state.product.product_name,
        gst: this.state.product.gst,
        discount:this.state.product.discount
      });
      if (shouldBuyNow) {
        this.props.history.push("/orderAddress");
      } else {
        this.setState({ added: !this.state.added });
        setTimeout(() => {
          this.setState({ added: !this.state.added });
        }, 3000);
      }
    
  };

  incrementqty = () => {
    console.log("inc")
    console.log("qyantity "+this.state.minqty)
    let prev = parseInt(this.state.minqty)+1
    console.log(prev)

    this.setState({
      minqty: prev,
      total_price:parseInt(this.state.product.totalprice)*prev
    });

 
  };
  decrementqty = () => {
    if (this.state.minqty > this.state.product.qty) {
      let prev = parseInt(this.state.minqty)-1
      this.setState((prevState) => ({
        minqty: prev,
        total_price:parseInt(this.state.product.totalprice)*prev
      }));
    }

    
   
  
  };

  render() {
    
    return (
     
      <>
        <NavSection />
        {this.state.added ? (
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
                  <em>Cart Update</em>
                </ToastHeader>
                <ToastBody>
                  {this.state.product.product_name} is added into cart.
                </ToastBody>
              </Toast>
            </div>
          </div>
        ) : null}
        <Container style={{ backgroundColor: "white", minHeight: "90vh" }}>
          {this.state.product === null ? (
            <Spinner
              style={{
                width: "3rem",
                height: "3rem",
                margin: "30% calc(50% - 1.5rem)",
              }}
            />
          ) : (
              <>
                <Row>
                  <Col>
                    {this.state.product.category} &gt;{" "}
                    {this.state.product.product_name}
                  </Col>
                </Row>
                <Row>
                  {" "}
                  <hr />
                </Row>
                <Row>
                  <Col md="2">
                    {this.state.product.images.map((item) => {
                      return <img style={{ margin: "1px" }} src={item.image} />;
                    })}
                  </Col>
                  <Col md="4">
                    <img
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                      src={this.state.product.images[0].image}
                    />
                  </Col>
                  <Col md="6">
                    <Row>
                      <Col>
                        <h2>{this.state.product.product_name}</h2>
                      </Col>
                    </Row>
                    <Row>

                      <Col>
                        Author:{" "}
                        <span style={{ color: "#85A4CB" }}>
                          {this.state.product.seller_name}
                        </span>
                      </Col>
                    </Row>
                    <Row>
                      <hr width="95%" />
                      <Col
                        xs="6"
                        style={{ borderRight: "1px solid", margin: "auto" }}
                      >
                        {store.getState().auth.isAuthenticated? (
                          
                            <Row>
                              <Col>
                                M.R.P. :{" "}
                                <del style={{ color: "crimson" }}>
                                  Rs. {this.state.product.price}
                                </del>
                              </Col>
                            </Row>
                          ) : (
                            <></>
                          )}

{store.getState().auth.isAuthenticated? (
                          
                            <Row>
                            <Col>
                             <span style={{color:"green",display:`${((this.state.product.discount==0)||(this.state.product.discount==undefined))?"none":"bloc"}`}} >{this.state.product.discount}% off |</span>  <span style={{color:"grey",display:`${this.state.product.gst==0?"none":"bloc"}`}} > GST :{this.state.product.gst}% </span>
                        
                            </Col>
                          </Row>
                          ) : (
                            <></>
                          )}

                        <Row>
                          <Col>Per Quantity :{this.showPrices()}</Col>
                        </Row>

                        {store.getState().auth.isAuthenticated? (
                          
                            <Row>
                            <Col><h4>Total price : Rs {this.state.total_price} </h4></Col>
                          </Row>
                          ) : (
                            <></>
                          )}

                      
                      </Col>
                      <Col
                        xs="6"
                        style={{
                          margin: "auto",
                          paddingLeft: "2em",
                        }}
                      >
                        <Row>
                          <Col>Quantity</Col>
                        </Row>
                        <Row>
                          <ButtonGroup size="md">
                            <Button
                              onClick={this.incrementqty}
                              style={this.btnStyle}
                            >
                              {" "}
                            +{" "}
                            </Button>
                            <Button style={this.btnStyleText}>
                              {" "}
                              {this.state.minqty}{" "}
                            </Button>
                            <Button
                              onClick={this.decrementqty}
                              style={this.btnStyle}
                            >
                              {" "}
                            -{" "}
                            </Button>
                          </ButtonGroup>
                        </Row>
                      </Col>
                    </Row>
                    <hr width="95%" />
                    <Row>
                      <Col>
                        <Button className="btn-add-cart"
                          onClick={() => this.addToCart(false)}
                          color="warning"
                        >
                          Add to cart
                      </Button>
                      </Col>
                      <Col>
                        <Button className="btn-buy-now"
                          onClick={() => this.addToCart(true)}
                            color="primary"
                        >
                          Buy now
                      </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col>Description</Col>
                    </Row>
                    <Row>
                      <Col style={this.smallText}>
                        {this.state.product.description}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </>
            )}
        </Container>
      </>
    );
  }
}
