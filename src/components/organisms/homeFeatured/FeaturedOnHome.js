
import React, { Component } from "react";
import Axios from "axios";
import { FiShoppingCart } from "react-icons/fi";

import C from "../../../resource/values";
import "./style.css";
import banner from "../../../assets/images/Banner.jpg";
import logo from "../../../assets/images/logo.png";
import slider1 from "../../../assets/images/slider-1.jpeg";
import slider2 from "../../../assets/images/slider-2.jpeg";
import slider3 from "../../../assets/images/slider-3.jpeg";
import GROCERY from "../../../assets/images/GROCERY.jpeg";
import Fruit from "../../../assets/images/Fruit and veg.jpeg";
import MEAT from "../../../assets/images/MEAT.jpeg";
import FMGC from "../../../assets/images/FMGC.jpeg";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import { Container, Row, Col,UncontrolledCarousel } from 'reactstrap';
export default class FeaturedOnHome extends Component {

  constructor(props) {
    super(props);
    // console.log(this.props.items);
    // this.gridWise = this.gridWise.bind(this);
    this.state = {
      dealsofDayItems: [],
      recommendedItems: [],
      discountItems: [],
      recentlyViewedItems: [],

      gallery_fdsp: [],
      gallery_fmcg: [],
      gallery_fveg: [],
      gallery_meat: [],
    };
  }

  componentDidMount() {
    Axios.post(`${C.SERVER_CALL}/products/getallcats`)
      .then((res) => {

        console.log(res);
        this.setState({
          gallery_fdsp: res.data[0].listofcat,
          gallery_fmcg: res.data[1].listofcat,
          gallery_fveg: res.data[2].listofcat,
          gallery_meat: res.data[3].listofcat,
        });
      
      })
      .catch((err) => { });
      
  }
  handleOnDragStart = (e) => e.preventDefault();
  responsive = {
    0: { items: 1 },
    1024: { items: 4 },
  };
  render() {

    const images = [{ url: slider1,height:"100px" }, { url: slider2 }, { url: slider3 }];



    const items = [
      {
        src: `https://www.studentprojectguide.com/wp-content/uploads/2017/08/ONline-book-store.jpg` ,
        
        key: '1'
      },
      {
        src: `https://www.teahub.io/photos/full/16-167936_beautiful-book-pen-images-hd.jpg` ,
  
        key: '2'
      },
      {
        src: `https://wallpaperaccess.com/full/124493.jpg` ,
 
        key: '3'
      },
    ];

    return (
      <div>
    
        <div className="showr">
          <div className="show-main">
            <div className="code-show-main">
           <p >
              Online BOOK Delivery 
                <span style={{ color: "#FF2525" }}>&nbsp; At Your Home   </span>
                </p>
      
            </div>
        

            
          
           
          </div>
          <div className="show-banner">
          
            <UncontrolledCarousel     items={items} />
          </div>
        </div>

        <div className="rest">
          <div className="heading">
            <center className="heading-sub" id="sbc">Best Seller</center>
          </div>
       
        <div style={{display:"flex",height:"500px",flexDirection:"row",justifyContent:"space-between",margin:"50px"}}>
          <div className="best" style={{height:"400px"}}> <img style={{height:"400px",width:"300px"}} src="https://wallpapercave.com/wp/wp1850840.jpg"></img></div>
          <div  className="best"   style={{height:"400px"}}> <img style={{height:"400px",width:"300px"}} src="https://wallpaperaccess.com/full/4159671.jpg"></img></div>
          <div  className="best"   style={{height:"400px"}}> <img style={{height:"400px",width:"300px"}} src="https://images-na.ssl-images-amazon.com/images/I/91O3sSOxj6L.jpg"></img></div>
          <div  className="best"   style={{height:"400px"}}> <img style={{height:"400px",width:"300px"}} src="https://images-na.ssl-images-amazon.com/images/I/61kQj6QqqDL.jpg"></img></div>
          <div  className="best"   style={{height:"400px"}}> <img style={{height:"400px",width:"300px"}} src="https://images-na.ssl-images-amazon.com/images/I/718IFXaRdGL.jpg"></img></div>
          
          </div> 
   
          <hr className="hr" />
        </div>
      </div>
    );
  }
}