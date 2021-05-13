import React, { Component } from 'react';
import NavSection from '../components/organisms/nav-section/index'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import leftarrow from "../assets/images/leftarrow.png";
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
                    &nbsp; About Ucliq
                    </div>
            </div>
            <div className="about-col">
                <div className="innerStyle"><p>UcliQ is a Business-to-Business (B2B) e-commerce company 
                    that brings a large number of retailers & sellers onto one platform. 
                    With a dream of digitalizing 25% of traditional supply chains,
                    it is currently operating in Delhi/NCR. UcliQ connects farmers, manufacturers, producers and 
                    wholesalers with retailers, kirana stores, cafes and restaurants, thereby helping local sellers
                    to expand their businesses without having to worry about the hassles involved in the supply chains.
                    </p></div>
                    <div className="innerStyle">
                        <p>With UcliQ, businesses can :</p>
                            <ul>
                                <li>BUY & SELL according to their terms, with safe payments, trustworthy logistics, and on-time delivery guarantees.</li>
                                <li>EXPAND their network by connecting them to new suppliers, retailers, and organizations.</li>
                                <li>Get assurance about the QUALITY and FRESHNESS of their products</li>
                                <li>•	Get REAL-TIME DATA on prices, to ensure all parties get the best out of the business transactions</li>
                            </ul>
                    </div>
                    <div className="innerStyle">
                        <h3>BUY & SELL</h3>
                        <p>If you want to buy or sell, UcliQ is just a 
                        click or a phone call away! It provides hassle-free and timely pickup and delivery, 
                        to ensure your convenience at all times</p>
                        <h3>GROW</h3>
                        <p>For its buyers and sellers, UcliQ facilitates entry into new markets through quick, 
                            low-cost delivery services. By connecting you to the right sellers/buyers, it helps
                            you grow your business without worrying about the logistical problems along the way</p>
                        <h3>QUALITY</h3>
                        <p>Quality and freshness of the products are always guaranteed by UcliQ’s delivery team. 
                        On-time delivery and reduction of wastage are its topmost priorities.</p>
                        <h3>BEST RATES</h3>
                        <p>UcliQ enables transparency along the entire supply chain. Real time data on prices mean
                            you get the best deals and timely, online methods of payment ensures safe and smooth 
                            transactions for all parties involved.</p>
                    </div>
            </div>
        </div>);
    }
}

export default about;