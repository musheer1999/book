import React, { Component } from "react";
import NavSection from "../components/organisms/nav-section";
import FeaturedOnHome from "../components/organisms/homeFeatured/FeaturedOnHome";
import footer from "../components/organisms/footer/footer";
import Axios from "axios";
import { Spinner } from "reactstrap";
import C from "../resource/values";
import './Home.css'
export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allCatDetails: null,
    };
  }

  componentDidMount() {
    Axios.post(C.SERVER_CALL + '/products/getallcats').then(
      (catDetails) => {
        console.log(catDetails)
        this.setState({
          allCatDetails: catDetails,
        });
      }
    );
  }
  render() {
    return (
      <div>
      <NavSection />
      <div>
          {this.state.allCatDetails !== null ? (
            <FeaturedOnHome items={this.state.allCatDetails} />
          ) : (
              <Spinner
                color="blue"
                style={{
                  width: 50,
                  height: 50,
                  margin: "30vh auto",
                  justifySelf: "center",
                }}
              />
            )}
          {footer()}
        </div>
      </div>
    );
  }
}
