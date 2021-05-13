import React, { Component } from 'react';
import NavSection from "../../components/organisms/nav-section";
import "./all_order.css";
import { Container, Spinner,Button } from 'reactstrap';
import axios from "axios";
import C from "../../resource/values";
import "bootstrap/dist/css/bootstrap.min.css";
import leftarrow from "../../assets/images/leftarrow.png";
import { Link } from "react-router-dom";
class buyerOrder extends Component {
    constructor() {
        super();
        this.state = {
            anyorder: false,
            orders: [],
            count: 0,
            loading: false,
            bills:[],
            total:0
        }
        this.Delivery = this.Delivery.bind(this)
    }

    componentDidMount = async () => {
  
    
      let adminbill = await axios.post(C.SERVER_CALL + "/admin/getbill")
    
      let bills = [];
      let x =0;
   
    
   this.setState({
       bills:adminbill.data.reverse(),
       anyorder: (adminbill.data.length > 0) ? true : false,
   
            count: bills.length
   })
      
    }

  



Delivery= async (id)=>{

    let user =  await axios.get(C.SERVER_CALL  + "/admin/delivered/"+id) 
  
    let adminbill = await axios.post(C.SERVER_CALL + "/admin/getbill")

    this.setState({
        bills:adminbill.data.reverse(),
    })
  
}

    render() {
        let x =0
        return (
            <div>
                
                <div className="li-p bread-p">
                <div>
                  <Link to={"/admin/verify"}>
                    <img src={leftarrow} alt="" style={{ width: "30px" }} />
                  </Link>
                </div>
                <div>
                  <Link to={"/admin/verify"}>&nbsp;&nbsp;admin </Link>/&nbsp;verify
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
                                                        <div class><img src={o.order_detail!=undefined?o.order_detail.productImg:""} alt='' className='flexbox-item flexbox-item-1' /></div>
                                                        <div className="flexbox-item flexbox-item-2">
                                                        <div className="buyerOrders-inner-a">
                                                                <div><p className='order-received-name'><u><h3><b>{o.order_detail!=undefined?o.order_detail.productName:""}</b></h3></u></p></div>
                                                                {/*<div><p style={{padding: '0.09em' }} className='received-contentp'><b>#34343434</b></p></div>*/}
                                                        </div>
                                                        <div className="buyerOrders-inner-q">
                                                            
                                                                <div> <p style={{ marginRight: '5px', padding: '0.09em' }} className='received-contentp' ><b>Price:</b>{o.order_detail!=undefined?o.order_detail.netprice:""}</p>
                                                                <div> <p style={{ marginRight: '5px', padding: '0.09em' }} className='received-contentp' ><b>Total Price:</b>{o.order_detail!=undefined?o.order_detail.total_price:""}</p>
                                                                
                                                                </div>
                                                                </div><div className="qnt-div" ><p style={{ padding: '0.09em' }}><b>Qty:</b>{o.order_detail!=undefined?o.order_detail.quantity:""}</p></div>
                                                            </div>
                                                            <div className="buyerOrders-inner-ab">
                                                                <div><p style={{ marginRight: '5px', borderRight: '1px solid gray', padding: '0.09em' }}><b>Seller Name:</b>{o.order_detail!=undefined?o.order_detail.sellerName:""}</p></div>
                                                                <div><p style={{ marginRight: '5px', borderRight: '1px solid gray', padding: '0.09em' }}><b>Seller ID:</b>{o.order_detail!=undefined?o.order_detail.seller:""}</p></div>
                                                                <div> <p style={{ padding: '0.09em' }}><b>Mode Of payment</b> : {o.order_detail!=undefined?o.order_detail.modeOfPayment:""}</p></div>
                                                                {/* <div><p style={{ padding: '0.09em' }}><b>Status</b> : {o.order_detail!=undefined?o.order_detail.status:""}</p></div> */}
                                                                <div><p style={{ padding: '0.09em' }}><b>Order Id</b> : {o.order_detail!=undefined?o.order_detail.ID:""}</p></div>
                                                            </div>
                                                        </div>
                                                        <div className="flexbox-item flexbox-item-3">
                                                            <Link to={`/admin/trackOrder/${o.order_detail!=undefined?o.order_detail._id:""}`}>
                                                                <button className="btn btn-primary" style={{ color: "white", border: "1px solid white", padding: "10px 40px" }}>
                                                                   Order Details
                                                            </button>
                                                            </Link>
                                                        </div>
                                                </div>
                                                   


                                            </>
                                        ))
                                    }
                                                  
                                                  <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",height:"40px",alignItems:"center"}}><div>Total ={x } + 50 (Delivery Charge) = {x +50}</div> </div>
                                                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"20px"}}><div>{b.status}</div>
                                                  <div> {b.status=="not delivered"?<button onClick={()=>this.Delivery(b._id)}  className="btn btn-primary" style={{ color: "white", border: "1px solid white", padding: "10px 40px" }}>
                                                                   Delivered 
                                                            </button>:""}</div></div>   
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



