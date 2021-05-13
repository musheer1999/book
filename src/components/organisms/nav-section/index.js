import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

import { withRouter } from "react-router-dom";
import iconFmcg from "./icons8-fast-moving-consumer-goods-50 (1).png";
import iconMeat from "./icons8-meat-50.png";
import iconFood from "./icons8-natural-food-50.png";
import iconCart from "./icons8-shopping-cart-64.png";
import iconPlate from "./icons8-soup-plate-50.png";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

import iconMan from "./acc.png"
import "./custom.css";
import { Link } from "react-router-dom";
import { logoutUser } from "../../../actions/authActions";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import logo from '../../../assets/images/logo.png';
import search from "../../../assets/images/search.jpg"
import Hamburger from "../../../assets/images/Hamburger.png"
import C from '../../../resource/values'
import axios from "axios";

class NavSection extends Component {
  constructor(props) {
    super()
    this.state = {
      name:"",
      collapsed: true,
      select:"Search by product",
      data: [
        {
          _id: "5ec6bf92db07952fd6056c1e",
          icon: iconFood,
          name: "Food",
        },
        {
          _id: "5ec6c01d0aa60d3028408a19",
          icon: iconFmcg,
          name: "FMCG",
        },
        {
          _id: "5ec6c0760aa60d3028408a1a",
          icon: iconPlate,
          name: "Fruits and Veg.",
        },
        {
          _id: "5ec818ce94ba72744bc0145a",
          icon: iconMeat,
          name: "Meat",
        },
      ],
    };

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }
  onLogoutClick(e) {
    e.preventDefault();

    this.props.logoutUser(this.props.history);
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
search(){
 console.log("searched")
let se= document.getElementById("search").value
// this.props.history.location.reload()

window.location.replace(window.location.origin+"/search/"+se);


}

search2(){
  console.log("searched")
 let se= document.getElementById("search2").value
 // this.props.history.location.reload()
 
 window.location.replace(window.location.origin+"/search/"+se+"/"+this.state.select);
 
 
 }

 select = (event)=>{
this.setState({select:event.target.value},()=>{
  console.log(this.state.select)
})

  
}

  componentDidMount() {
    axios.get(C.SERVER_CALL +"/auth/profile").then((users)=>{
      this.setState({name:users.data.email})
 
    });
    const sidebar = document.querySelector(".sidebar");
    const closeIcon = document.querySelector(".close");
    const hamburger = document.querySelector(".hamburger");
    const overlay = document.querySelector(".overlay");
    const closeSideBar = () => {
      sidebar.classList.remove("reveal-sidebar");
      overlay.style.display = "none";
    };
    const openSideBar = () => {
      sidebar.classList.add("reveal-sidebar");
      overlay.style.display = "block";
    };
    closeIcon.addEventListener("click", closeSideBar);
    hamburger.addEventListener("click", openSideBar);
    overlay.addEventListener("click", closeSideBar);
  }



  render() {
    
   
 
    const { isAuthenticated, user } = this.props.auth;
 
    const guestLinks = (
      <>
        <div className="sidebar-item" style={{backgroundColor:`${window.location.pathname=="/"?"rgba(255, 0, 0, 0.3)":"#FEF200"}`}}>
        <Link to="/"><div className="nav-tex">
          Home 
        </div></Link>
        </div>
        <div className="sidebar-item">
          <Link to='/login'><div className="nav-tex">Login / Signup</div></Link>
        </div>
        <div className="sidebar-item">
          <Link to="/shopCategory"><div className="nav-tex">Shop by Category</div></Link>
        </div>
        <div className="sidebar-item"   style={{backgroundColor:`${window.location.pathname=="/about"?"rgba(255, 0, 0, 0.3)":"#FEF200"}`}}>
          <Link to="/about"><div className="nav-tex">About</div></Link>
        </div>
        <div className="sidebar-item" style={{backgroundColor:`${window.location.pathname=="/support"?"rgba(255, 0, 0, 0.3)":"#FEF200"}`}} >
            <Link to="/support"><div className="nav-tex">Help and Support</div></Link>
        </div>
        <div className="sidebar-item"  style={{backgroundColor:`${window.location.pathname=="/policy"?"rgba(255, 0, 0, 0.3)":"#FEF200"}`}}>
          <Link to="/policy"><div className="nav-tex">Terms and Conditions</div></Link>
        </div>
      </>
    );
    const authLinks = (
      <>
        <div className="sidebar-item" style={{backgroundColor:`${window.location.pathname=="/"?"rgba(255, 0, 0, 0.3)":"#FEF200"}`}}>
          <Link to="/"><div className="nav-tex">Home </div></Link>
        </div>

        <div className="sidebar-item"  style={{backgroundColor:`${window.location.pathname=="/shopCategory"?"rgba(255, 0, 0, 0.3)":"#FEF200"}`}}>
          <Link to="/shopCategory"><div className="nav-tex">Shop by Category</div></Link>
        </div>
        <div className="sidebar-item" style={{backgroundColor:`${window.location.pathname=="/dashboard/yourOrders"?"rgba(255, 0, 0, 0.3)":"#FEF200"}`}}>
          <Link to="/dashboard/yourOrders"><div className="nav-tex">Latest Orders</div></Link>
        </div>

        <div className="sidebar-item">
          <Link onClick={this.onLogoutClick.bind(this)}><div className="nav-tex">Sign Out</div></Link>
            </div>
            <b className="sidebar-info"><div className="nav-tex">INFORMATION</div></b>
        <div className="sidebar-item"   style={{backgroundColor:`${window.location.pathname=="/about"?"rgba(255, 0, 0, 0.3)":"#FEF200"}`}} >
          <Link to="/about"><div className="nav-tex">About</div></Link>
        </div>
        <div className="sidebar-item"style={{backgroundColor:`${window.location.pathname=="/support"?"rgba(255, 0, 0, 0.3)":"#FEF200"}`}}   >
          <Link to="/support"><div className="nav-tex">Help and Support</div></Link>
        </div>
        <div className="sidebar-item"  style={{backgroundColor:`${window.location.pathname=="/policy"?"rgba(255, 0, 0, 0.3)":"#FEF200"}`}} >
          <Link to="/policy"><div className="nav-tex">Terms and Conditions</div></Link>
        </div>
      </>
    );
    return (

    
      <>
        <div className="nav-body">
          <ul>
            <li className="hamburger">
              <img src={Hamburger} className='hambuger-image' />
            </li>
            
            <li className="home-logo">
              
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            
            </li>
            <li className='search-li-nav'>
              <div className="wrap-nav res-li">
                <div className="search">
                  <input type="text" id="search2" className="searchTerm" placeholder="What are you looking for?" />
                  <button type="submit" onClick={this.search2.bind(this)} className="searchButton">
                    <img src={search} className='nav-icon-1'/>
                  </button>
                </div>
              </div>
            </li>
            <li style={{marginLeft:"10px"}}>
            <select onChange={this.select} id="ser" name="ser">
    <option value="Search by product">Search by product</option>
    <option value="search by author">search by author</option>
  </select>
            </li>
            {
              isAuthenticated
                ? <>
                  <li className="cart">
                    <Link to="/cart">
                      <FiShoppingCart style={{ fontSize: "28px" }} />
                    </Link>
                  </li>
                  <li className="name-div" style={{ marginLeft: "auto", marginRight: "auto" }}>
                    <Link to={"/dashboard/ownerprofile"}>
                    {this.state.name}
                   
                    </Link>
                  </li>
                  <li className="icon-div" style={{ marginLeft: "auto", marginRight: "auto",display:"none" }}>
                    <Link to={"/dashboard/ownerprofile"}>
                  
                   <AiOutlineUser style={{ fontSize: "28px" ,marginLeft:"50px",marginRight:"20px"}} />
                    </Link>
                  </li>
                </>
                : <>
                  <li className="login-btn">
                    <Link to={"/login"}>
                      login
                  </Link>
                  </li>
                </>
            }
          </ul>
          <ul className="mob-nav">
          <li className='search-li-nav'>
              <div className="wrap-nav res-li-mob">
                <div  className="search">
                  <input type="text" id="search" className="searchTerm" placeholder="What are you looking for?" />
                  <button type="submit" onClick={this.search.bind(this)} className="searchButton">
                    <img src={search} className='nav-icon-1'/>
                  </button>
                </div>
              </div>
            </li>
          </ul>
       
        </div>
        <div className="sidebar">
          
          <div className="sidebar-logo" >
        
            <div>
        
              <img src={logo}/>
              <h4>IQRA</h4>
              </div>
            
            <div className="close">X</div>
          </div>
         
          {isAuthenticated ? authLinks : guestLinks}
        </div>
        <div className="overlay"></div>
      </>
    );
  }
}

NavSection.propTypes = {

  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser})(withRouter(NavSection));
