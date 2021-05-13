import React, { Component } from 'react';
import NavSection from "../components/organisms/nav-section";
import "./buyerOrders.css";
import { Container, Spinner } from 'reactstrap';
import axios from "axios";
import C from "../resource/values";
import "bootstrap/dist/css/bootstrap.min.css";
import leftarrow from "../assets/images/leftarrow.png";
import { Link } from "react-router-dom";
class buyerOrder extends Component {
    constructor() {
        super();
        this.state = {
            anyorder: false,
            orders: [],
            count: 0,
            loading: false,
            bills:[]
        }
    }

    componentDidMount = async () => {
  
      let bills =  await axios.get(C.SERVER_CALL  + "/cart/bills") 
      console.log(bills.data)
      console.log(bills.data)
   this.setState({
       bills:bills.data,
       anyorder: (bills.data.length > 0) ? true : false,
   
            count: bills.data.length
   })
      
    }

    changeStatus = async (id, status) => {
        this.setState({ loading: true })
        let st
        if (status === "order not confirmed yet") {
            st = "ready to pack"
        }
        else
            if (status === "ready to pack") {
                st = "ready to hand"
            }
            else
                if (status === "ready to hand") {
                    st = "dispatch"
                }

        let setStatus = await axios.post(C.SERVER_CALL + `/seller/seller/status/${id}`, {
            status: st
        })
        if (setStatus) {

            let orderList = this.state.orders
            for (let i = 0; i < orderList.length; i++) {
                if (orderList[i]._id === id) {
                    if (status === "order not confirmed yet") {
                        orderList[i].status = "ready to pack"
                    }
                    else
                        if (status === "ready to pack") {
                            orderList[i].status = "ready to hand"
                        }
                        else
                            if (status === "ready to hand") {
                                orderList[i].status = "order complete"
                            }
                            else
                                if (status === "Order Cancelled") {
                                    orderList[i].status = "Order Cancelled"
                                }
                    break
                }
            }
            this.setState({ orders: orderList })
            this.setState({ loading: false })

            return
        }
        alert("please try again later")
    }

    render() {
        let x=0;
        return (
            <div>
                <NavSection />
                <div className="li-p bread-p">
                <div>
                  <Link to={"/dashboard"}>
                    <img src={leftarrow} alt="" style={{ width: "30px" }} />
                  </Link>
                </div>
                <div>
                  <Link to={"/dashboard"}>&nbsp;&nbsp;Dashboard </Link>/&nbsp;Latest Orders
             </div>
              </div>
                <Container>
                    {
                        this.state.loading
                            ? <div className="loader-sell">
                                <Spinner
                                    className="loader"
                                    animation="border"
                                    role="status"
                                    variant="light"
                                />
                                <div className="loader-content">
                                    Updating ....
                                </div>
                            </div>
                            : <></>
                    }
                    <div className='received '>
                        {
                            this.state.anyorder
                                ?
                                <>
{
                                        this.state.bills.map((b) => (
                                        
                                 
                                            <><div style={{display:"none"}}>{x=0}</div>
                                                <div className="flexbox-containerm-order">

                                                        <div className="flexbox-item flexbox-item-2">
                                                    
                                                        {
                                        b.bill.map((o) => (
                                            
                                            <><div style={{display:"none"}}>{x=x+(o.order_detail!=undefined?o.order_detail.total_price:"")}</div>
                                            
                                                <div className="flexbox-containerm">
                                                    
                                                        <div class><img src={o.order_detail.productImg} alt='' className='flexbox-item flexbox-item-1' /></div>
                                                        <div className="flexbox-item flexbox-item-2">
                                                        <div className="buyerOrders-inner-a">
                                                                <div><p className='order-received-name'><u><h3><b>{o.order_detail.productName}</b></h3></u></p></div>
                                                                {/*<div><p style={{padding: '0.09em' }} className='received-contentp'><b>#34343434</b></p></div>*/}
                                                        </div>           
                                                        <div className="buyerOrders-inner-q">
                                                                <div> <p style={{ marginRight: '5px', padding: '0.09em' }} className='received-contentp' ><b>Price:</b>{o.order_detail.netprice} </p>
                                                                <div> <p style={{ marginRight: '5px', padding: '0.09em' }} className='received-contentp' ><b>Total Price:</b>{o.order_detail.total_price} </p>  </div>
                                                                </div><div className="qnt-div" ><p style={{ padding: '0.09em' }}><b>Qty:</b>{o.order_detail.quantity}</p></div>
                                                            </div>
                                                            <div className="buyerOrders-inner-ab">
                                                                <div><p style={{ marginRight: '5px', borderRight: '1px solid gray', padding: '0.09em' }}><b>Author Name:</b>{o.order_detail.sellerName}</p></div>
                                                                <div> <p style={{ padding: '0.09em' }}><b>Mode Of payment</b> : {o.order_detail.modeOfPayment}</p></div>
                                                                {/* <div><p style={{ padding: '0.09em' }}><b>Status</b> : {o.order_detail.status}</p></div> */}
                                                                <div><p style={{ padding: '0.09em' }}><b>Order Id</b> : {o.order_detail.ID}</p></div>
                                                            </div>
                                                        </div>
                                            
                                                </div>
                                                   


                                            </>
                                        ))
                                    }
                                                  
                                                 <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",height:"40px",alignItems:"center"}}><div>Total ={x } + 50 (Delivery Charge) = {x +50}</div> </div>              
                                                        </div>
                                                </div>
                                                   


                                            </>
                                        ))
                                    }
                                
                                   
                                </>
                                :
                                <>
                                    No orders received !!
                                </>
                        }
                    </div>
                </Container >

            </div >
        )
    }
}
export default buyerOrder



