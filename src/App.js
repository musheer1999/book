import React from "react";
import Home from "./pages/Home";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import CategoryPage from "./pages/CategoryPage";
import shopCategory from "./pages/shopCategory";

import Search from "./pages/search";

import Ownerprofile from "./pages/Ownerprofile";

import { Provider } from "react-redux";
import store from "./store";

import NewProductPage from "./pages/NewProductPage";
import PaymentDetails from "./pages/paymentDetails";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";

import cart from "./pages/cart";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import firstLogin from "./pages/Setup";

import PrivateRoute from "./utils/PrivateRoute";
import PrivateVerify from "./utils/PrivateVerify";

import Admin from "./pages/Admin/Admin";
import OrderAddress from "./pages/OrderAddress";
import billingAddress from "./pages/billingAddress";

import orderPlaced from "./pages/orderPlaced";

import buyerOrders from "./pages/buyerOrders";


import addNewNumber from "./pages/addNewNumber";


import policy from "./pages/policy";

import about from "./pages/about";
import Address from  "./pages/address"
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path={"/admin"}>
              <Admin />
            </Route>
            <Route path={"/login"}>
              <Login />
            </Route>
            <Route path={"/signup"}>
              <Signup />
            </Route>
            <PrivateRoute
              exact
              path="/paymentDetails"
              component={PaymentDetails}
            />
            <Route
              exact
              path="/category/:name"
              component={CategoryPage}
            ></Route>
              <Route
              exact
              path="/address"
              component={Address}
            ></Route>
            <Route
              exact
              path="/product/test"
              component={NewProductPage}
            ></Route>
            <Route path="/product/:id" component={NewProductPage}></Route>


            <PrivateRoute
              exact
              path="/dashboard/yourOrders"
              component={buyerOrders}
            />
  
            <PrivateRoute
              exact
              path="/dashboard/ownerprofile"
              component={Ownerprofile}
            />

            <PrivateRoute exact path="/shopCategory" component={shopCategory} />

            <PrivateRoute exact path="/orderAddress" component={OrderAddress} />
   
            <PrivateRoute
              exact
              path="/billingAddress"
              component={billingAddress}
            />

            <PrivateRoute exact path="/orderPlaced" component={orderPlaced} />

            <PrivateRoute exact path="/setup" component={firstLogin} />
            <PrivateRoute exact path="/cart" component={cart} />

            <PrivateRoute exact path="/addNewNumber" component={addNewNumber} />
            <PrivateRoute exact path="/search/:name/:sel" component={Search} />

            <PrivateVerify
              exact
              path="/about"
              component={about}
            />
            <PrivateVerify
              exact
              path="/policy"
              component={policy}
            />
            <Route path={"/"}>
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
