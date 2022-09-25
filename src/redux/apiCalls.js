import {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
  signupStart,
  signupSuccess,
  signupFailure,
} from "./userRedux";
import { generalRequest } from "../httpService";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await generalRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    window.location.pathname = "/";
  } catch (err) {
    dispatch(loginFailure(), logout());
  }
};

export const signup = async (dispatch, user) => {
  dispatch(signupStart());
  try {
    const res = await generalRequest.post("/auth/register", user);
    dispatch(signupSuccess(res.data));
    window.location.pathname = "/";
  } catch (err) {
    dispatch(signupFailure());
  }
};

// export const signout = async (dispatch) => {
// //   try {
// //     dispatch(logout());
// //   } catch (error) {}
// // };
