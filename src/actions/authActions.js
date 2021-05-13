import { GET_ERRORS } from "../actions/types";
import { SET_CURRENT_USER } from "../actions/types";
import { USER_SETUP } from "../actions/types";
import { LOGIN_USER } from "../actions/types";
import { SET_CURRENT_ADMIN } from "../actions/types";
import { CHANGE_NUMBER } from "../actions/types";
import jwt_decode from "jwt-decode";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";




export const loginAdmin = (userData, history) => (dispatch) => {
  console.log(userData)
  axios
    .post("/admin/login", userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);

      setAuthToken(token);
      const decoded = jwt_decode(token);
console.log(decoded)
      dispatch(setCurrentAdmin(decoded));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};


//used
export const loginUser = (userData, history) => (dispatch) => {

  axios
    .post("/auth/login", userData)
    .then((res) => {

      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
console.log(token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      console.log(decoded)
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const changePhoneNumber = (userData, history) => (dispatch) => {
  axios
    .post("/auth/verifyNumber", userData)
    .then((res) => {
      history.push("/verifyOtp");
      dispatch({
        type: CHANGE_NUMBER,
        payload: userData,
      });
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const addPhoneNumber = (userData, history) => (dispatch) => {
  axios.post("/auth/addNewNumber", userData).then((res) => {
    history.push("/verifyNextNumber", { phoneNo: res.data.phoneNo });
  });
};

export const userOtp = (userData, history) => (dispatch) => {
 
  axios
    .post("/auth/otpvalidation", userData)
    .then((res) => {
      const { token } = res.data;
      const { isSetupRequired } = res.data;
      const { isDocVerified } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded, isSetupRequired, isDocVerified));
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: "OTP not valid",
      });
    });
};

export const verifyOTP = (userData, history) => (dispatch) => {
  console.log(userData)
  axios
    .post("/auth/verifyOTP", userData)
    .then((res) => {
      history.push("/addNewNumber");
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: "OTP is incorrect",
      })
    );
};




export const setup = (userData, history) => (dispatch) => {
  axios
    .post("/auth/setup", userData)
    .then((res) => {
      history.push("/dashboard");
      dispatch({
        type: USER_SETUP,
        payload: userData,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const setCurrentUser = (decoded, isSetupRequired, isDocVerified) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
    isSetupRequired: isSetupRequired,
    isDocVerified: isDocVerified,
  };
};

export const setCurrentAdmin = (decoded) => {
  return {
    type: SET_CURRENT_ADMIN,
    payload: decoded,
  };
};

export const logoutUser = (history) => (dispatch) => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push("/");
};
