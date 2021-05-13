import img from "../../../assets/images/new-logo.png";
import React from "react";
import "./custom.css";
import { Link } from "react-router-dom";
import "./productDisplaycard.css";
import store from "../../../store";



export const ProductDisplayCard = (props) => {
  const isDocVerified = props.doc;
  const sign = props.sign

  const { item } = props;

  return (
    <div className="cont">
      <Link to={`/product/${item._id}`}>
        {/* <div className="card"> */}
        <div className="contCard">
          <div>
            <img src={item.images[0]==undefined?"":item.images[0].image || img}/>
          </div>
          <div className="contCardDetail">
            <div><h5 className="dotted">{item.product_name}</h5></div>
         {sign=="Please Sign in."? <div><span className="price">Price:</span><p>please sign in</p></div>
           :<div> <div><span className="price">Price:</span><p>{ item.price }</p></div>
           
           <span className="desc">Desc:</span><p>{item.description}</p></div>
           }
           
        
          </div>
        </div>
      </Link>
    </div>

  );
};
