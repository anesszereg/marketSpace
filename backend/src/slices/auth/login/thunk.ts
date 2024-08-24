//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper";
import {
  postFakeLogin,
  postJwtLogin,
  postSocialLogin,
} from "../../../helpers/fakebackend_helper";

import { loginSuccess, logoutUserSuccess, apiError, reset_login_flag } from './reducer';

const fireBaseBackend = getFirebaseBackend();

export const loginUser = (user: any, router: any) => async (dispatch: any) => {

  try {
    let response;
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      let fireBaseBackend = getFirebaseBackend();
      response = fireBaseBackend.loginUser(
        user.email,
        user.password
      );
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      response = postJwtLogin({
        email: user.email,
        password: user.password
      });

    } else if (process.env.REACT_APP_DEFAULTAUTH) {
      response = postFakeLogin({
        email: user.email,
        password: user.password,
      });
    }

    var data = await response;
    if (data) {
      localStorage.setItem("authUser", JSON.stringify(data));
      if (process.env.REACT_APP_DEFAULTAUTH === "fake") {
        var finallogin: any = JSON.stringify(data);
        finallogin = JSON.parse(finallogin)
        data = finallogin.data;
        if (finallogin.username && finallogin.password) {
          dispatch(loginSuccess(data));
          router("/")
        } else {
          dispatch(apiError(finallogin));
        }
      } else {
        dispatch(loginSuccess(data));
        router("/")
      }
    }
  } catch (error) {
    dispatch(apiError(error));
  }
};

export const logoutUser = () => async (dispatch: any) => {
  try {
    localStorage.removeItem("authUser");

    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = fireBaseBackend.logout;
      dispatch(logoutUserSuccess(response));
    } else {
      dispatch(logoutUserSuccess(true));
    }

  } catch (error) {
    dispatch(apiError(error));
  }
};

export const socialLogin = (data: any, router: any, type: any) => async (dispatch: any) => {
  try {
    let response;

    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend();
      response = fireBaseBackend.socialLoginUser(data, type);
    } else {
      response = postSocialLogin(data);
    }

    const socialdata = await response;

    if (socialdata) {
      localStorage.setItem("authUser", JSON.stringify(response));
      dispatch(loginSuccess(response));
      router("/")
    }

  } catch (error) {
    dispatch(apiError(error));
  }
};

export const resetLoginFlag = () => async (dispatch: any) => {
  try {
    const response = dispatch(reset_login_flag());
    return response;
  } catch (error) {
    dispatch(apiError(error));
  }
};