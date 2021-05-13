import React, { Component } from "react";
import NavSection from "../components/organisms/nav-section";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import pic from "../assets/images/acc.png";
import store from "../store";
import C from "../resource/values";
import axios from "axios";
import DisplayProductsOfCategory from "../components/organisms/productsOfCategory/DisplayProductsOfCategory";
export default class Search extends Component {

    constructor(){
        super();
        this.state={
          res: false,
            search_result:[]
        }
    }




         componentDidMount(){
             axios.get(C.SERVER_CALL+`/products/all_product`).then((data)=>{       
              let se= this.props.match.params.name

              console.log(se)
            
              let search_by=this.props.match.params.sel
              console.log(data);
              let prod_arr=[];
                for(let i=0;i<data.data.length;i++){
                  if(search_by=="Search by product"){
                    if(data.data[i].product_name.toUpperCase().indexOf(se.toUpperCase())>-1){
                      prod_arr.push(data.data[i])             
                                                                }

                  }else if(search_by=="search by author"){
                    if(data.data[i].seller_name.toUpperCase().indexOf(se.toUpperCase())>-1){
                      prod_arr.push(data.data[i])             
                                                                }
                  }
           
                                                        
                                                   }
                this.setState({
                  res: true,
                  search_result:prod_arr
                              })   })   }
        
                                                         
                          
  render() {
      
    return (
      <div style={{height:"1000px"}} className="dash">
           <div>
        <NavSection />
        {
          this.state.res
            ?
            <>
              {
                this.state.search_result.length > 0
                  ?
                  <DisplayProductsOfCategory data={this.state.search_result} />
                  :
                  <h1 style={{ margin: "auto", padding: "7%" }}>No items found...</h1>
              }
            </>
            :
            <h1 style={{ margin: "auto", padding: "7%" }}>Loading ....</h1>
        }
      </div>
      </div>
    );
  }
}
// id: this.props.match.params.id