import React, { Component } from 'react';
import NavSection from '../components/organisms/nav-section/index'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import leftarrow from "../assets/images/leftarrow.png";
import "./policy.css";
import "./about.css";


class about extends Component {
    state = {}
    render() {
        return (<div>
            <NavSection />
                <div className="bread-sc">
                    <div className="bread-sc-pic">
                        <Link to={"/home"}>
                            <img src={leftarrow} alt="" style={{ width: "30px" }} />
                        </Link>
                    &nbsp; Term and Conditions
                    </div>
            </div>
            <div className="about-col">
                <h3>
                Return Policy 
                </h3>
                <p>This Returns Policy (“Policy”) will govern request to return any of the product (“Product”) purchased by buyer (referred to as “Buyer”, you, your, etc.) from any third-party seller (“Seller”) using the Platform. For the purposes of this Policy, the term Buyer and Seller are collectively referred to as “User”.</p>
                <ol>
                    <li>You understand that we are an intermediary platform and will only be responsible to mediate the return request raised by you with the Seller. It shall be sole responsibility of the Seller to resolve the issues/ concerns raised by you in your return request. We shall not assume any liability for any failure on the part of the Seller to resolve your issue.</li>
                    <li>You may raise a return request/ or your concerns on the Platform with respect to any one of the following reasons:
                        <ul>
                            <li>Product with physical damage (if such damage is not in transit) or defective Product</li>
                            <li>Warranty issues with respect to the Product</li>
                            <li>Wrong Product or Product not matching the description or specifications mentioned on the listing page on the Platform;</li>
                            <li>Part of the order/ items are found to be missing (which is not due to logistics reasons); or</li>
                            <li>Issues related to the quality of the Product delivered.</li>
                        </ul>
                    </li>
                    <li>Any return request/ issues raised by you for any of the following reasons:
                        <ul>
                            <li>Missing Product or some items from the entire order placed found to be missing due to reasons attributable to logistics provider</li>
                            <li>Damage to the outer box delivered or Product damaged in transit; or</li>
                            <li>Any other logistics related issues</li>
                        </ul>
                    </li>
                    <li>At the time of making a Return Request, the Buyer will be required to provide appropriate supporting documentations:
                        <ul>
                            <li>Shipping label with Order ID;</li>
                            <li>Order details; </li>
                            <li>Packed Shipment; </li>
                            <li>Issue observed by the Buyer in the product; </li>
                            <li>Copy of bill invoice of the product received</li>
                        </ul>
                    </li>
                    <li>Our Return policy is categorical based. So Buyer can only raise a Return Request according to it: 
                        <table>
                            <tr>
                                <th>Categories</th>
                                <th>Timelines</th>
                            </tr>
                            <tr>
                                <td>Meat & Chicken</td>
                                <td>At the time of delivery only</td>
                            </tr>
                            <tr>
                                <td>Veggies & Fruits</td>
                                <td>At the time of delivery only</td>
                            </tr>
                            <tr>
                                <td>Groceries</td>
                                <td>1 day from the date of delivery of Shipment</td>
                            </tr>
                        </table>
                    </li>
                </ol>
            </div>
        </div>);
    }
}

export default about;