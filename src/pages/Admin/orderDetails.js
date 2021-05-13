import React, { Component } from 'react'
import { Container } from 'reactstrap'
import './orderDetails.css'
import axios from "axios";
import C from "../../resource/values";



class orderDetails extends Component {
    constructor() {
        super();
        this.state = {
            item: '',
            buyerAddress: '',
            sellerAddress: ''
        }
    }
    componentDidMount = async () => {
        let p = await axios.get(
            C.SERVER_CALL + `/seller/view/${this.props.match.params.id}`
        );

        this.setState({
            item: p.data.order,
            buyerAddress: p.data.order.address,
            sellerAddress: p.data.sellerAddress
        });

    };




    render() {
        return (
            <div>
           
                <Container>
                    <h1 className='text-center'>Order Details</h1>
                    <hr />
                    <h2 className='text-center'>Order Category: {this.state.item.category}</h2>
                    <hr />
                    <div className='Details-div'>
                        <img src={this.state.item.productImg} alt='' className='details-image' />
                        <div>
                            <p className='Details-productname'><b>{this.state.item.productName}</b></p>
                            <div className='Details-basicdetials'>
                                <p><b>Price:</b>₹{this.state.item.totalPrice}</p>
                                <p><b>Qty:</b>{this.state.item.quantity}</p>
                                <p><b>Mode of Payment:</b>{this.state.item.modeOfPayment}</p>
                            </div>
                            <div className='Details-paymentbasic'>
                                <p><b>Date of Purchase:</b>{this.state.item.date}</p>
                                <p><b>Status:</b><span style={{ color: "green" }}>{this.state.item.status}</span></p>
                                {/* <p><b>Status:</b><span style={{color:"red"}}>PENDING</span></p> */}
                            </div>
                            <p style={{ margin: 0, padding: 0, marginTop: '-10px' }}><b>OrderID:</b>{this.state.item._id}</p>
                            <div className='details-buyerseller'>
                                <div className='buyer-div'>
                                    <h4>Buyer Details:</h4>
                                    <p><b>Buyer Name:</b>{this.state.item.buyerName}</p>
                                    <p className='details-buyeraddress'><b>Buyer Address:</b>
                                        {this.state.buyerAddress.hno} <br />
                                        {this.state.buyerAddress.line1} <br />
                                        {this.state.buyerAddress.city} <br />
                                        {this.state.buyerAddress.state}
                                    </p>
                                </div>
                                <div className='seller-div'>
                                    <h4>Seller Details:</h4>
                                    <p><b>Seller Name:</b>{this.state.item.sellerName}</p>
                                    <p className='details-selleraddress'><b>Seller Address:</b>

                                        {this.state.sellerAddress.hno} <br />
                                        {this.state.sellerAddress.line1} <br />
                                        {this.state.sellerAddress.city} <br />
                                        {this.state.sellerAddress.state}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
export default orderDetails