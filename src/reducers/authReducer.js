import { TEST_OTP } from "../actions/types";
import { LOGIN_USER } from "../actions/types";
import { SET_CURRENT_USER } from "../actions/types";
import { USER_SETUP } from "../actions/types";
import { SET_CURRENT_ADMIN } from "../actions/types";

import _ from "lodash";

const initialState = {
  isAuthenticated: false,
  user: {},
  isSetupRequired: true,
  isAdmin: false,

};

export default function (state = initialState, action) {
  console.log(action)
  switch (action.type) {

    case TEST_OTP:
      return {
        ...state,
        OTP: action.payload,

        isAuthenticated: true,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !_.isEmpty(action.payload),
        isSetupRequired: action.isSetupRequired,
      };
    case SET_CURRENT_ADMIN:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !_.isEmpty(action.payload),
        isAdmin: !_.isEmpty(action.payload),
      };
    case LOGIN_USER:
      console.log(action)
      return {
        ...state,

      };
    case USER_SETUP:
      return {
        ...state,
        isSetupRequired: _.isEmpty(action.payload),
      };
    default:
      return state;
  }
}
