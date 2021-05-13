import React, { Component } from "react";
import NavSection from "../components/organisms/nav-section";
import axios from 'axios'
import DisplayProductsOfCategory from "../components/organisms/productsOfCategory/DisplayProductsOfCategory";
import C from "../resource/values";

export default class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      res: false
    };
  }
  componentDidMount = async () => {
    console.log(this.props.match.params.name)
    let items = await axios.post(C.SERVER_CALL + '/products/getsubcat', {
      category: this.props.match.params.name
    });
    console.log(items)
    if (items) {
      this.setState({ res: true })
      this.setState({ data: items.data })
    }
    
  }



  render() {
    console.log(this.state)
    return (
      <div style={{height:"1000px"}}>
        <NavSection />
        {
          this.state.res
            ?
            <>
              {
                this.state.data.length > 0
                  ?
                  <DisplayProductsOfCategory data={this.state.data} />
                  :
                  <h1 style={{ margin: "auto", padding: "7%" }}>No items</h1>
              }
            </>
            :
            <h1 style={{ margin: "auto", padding: "7%",color:"red" }}>Loading ....</h1>
        }
      </div>
    );
  }
}
