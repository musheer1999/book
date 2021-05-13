import React from "react";
import Addproduct from "./add_product";
import AllProduct from "./all_product";
import UpdateProduct from "./update_product"
import Product_Details from "./details"
import Verify from "./docverify";

import Adminlogin from "./adminlogin";


import MainAdmin from "./mainadmin";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "../../utils/PrivateRoute";

import AllOrder from './all_orders';
import NavSection from "../../components/organisms/nav-section";
import orderDetails from "./orderDetails";


import Tracker from  "./track"
import Details from "./details";

const Adminpanel = (props) => {
  return (
    <div >
      <NavSection />
  
      <Router>
        <Switch>
          <Route path="/admin" exact component={MainAdmin} />
          <Route path="/admin/login" exact component={Adminlogin} />
          <PrivateRoute path="/admin/additem" exact component={Addproduct} />
          <PrivateRoute path="/admin/verify" exact component={Verify} />
          <PrivateRoute path="/admin/all" exact component={AllProduct } />
          <PrivateRoute path="/admin/update/:id" exact component={UpdateProduct} />
          <PrivateRoute path="/admin/details/:id" exact component={Product_Details} />
 
          <PrivateRoute path="/admin/orders" exact component={AllOrder} />

          <PrivateRoute
            path="/admin/trackOrder/:id"
            exact
            component={Tracker}
          />
           <PrivateRoute
            path="/admin/orderDetails/:id"
            exact
            component={orderDetails}
          />

        </Switch>
      </Router>
    </div>
  );
};
export default Adminpanel;
