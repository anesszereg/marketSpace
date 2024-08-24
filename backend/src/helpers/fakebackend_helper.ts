import { APIClient } from "./api_helper";

import * as url from "./url_helper"

const api = new APIClient();
// Gets the logged in user data from local session

// Gets the logged in user data from local session
export const getLoggedInUser = () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return null;
};

// //is user is logged in
export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Register Method
export const postFakeRegister = (data: any) => {
  return api.create(url.POST_FAKE_REGISTER, data)
    .catch(err => {
      let message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message = "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};

// Login Method
export const postFakeLogin = (data: any) => api.create(url.POST_FAKE_LOGIN, data);

// postForgetPwd
export const postFakeForgetPwd = (data: any) => api.create(url.POST_FAKE_PASSWORD_FORGET, data);

// Edit profile
export const postJwtProfile = (data: any) => api.create(url.POST_EDIT_JWT_PROFILE, data);

export const postFakeProfile = (data: any) => api.create(url.POST_EDIT_PROFILE, data);

// Register Method
export const postJwtRegister = (url: any, data: any) => {
  return api.create(url, data)
    .catch(err => {
      var message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message = "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};
// Login Method
export const postJwtLogin = (data: any) => api.create(url.POST_FAKE_JWT_LOGIN, data);

// postForgetPwd
export const postJwtForgetPwd = (data: any) => api.create(url.POST_FAKE_JWT_PASSWORD_FORGET, data);

// postSocialLogin
export const postSocialLogin = (data: any) => api.create(url.SOCIAL_LOGIN, data);


// get Events
export const getEvents = () => api.get(url.GET_EVENTS, null);

// get Events
export const getCategories = () => api.get(url.GET_CATEGORIES, null);

// get Upcomming Events
export const getUpCommingEvent = () => api.get(url.GET_UPCOMMINGEVENT, null);

// add Events
export const addNewEvent = (event: any) => api.create(url.ADD_NEW_EVENT, event);

// update Event
export const updateEvent = (event: any) => api.update(url.UPDATE_EVENT, event);

// delete Event
export const deleteEvent = (event: any) => api.delete(url.DELETE_EVENT, { headers: { event } });

// dashboard Data
export const getChartData = (data: any) => api.get(url.GET_ALL_DATA, null);
export const getMonthlyData = (data: any) => api.get(url.GET_MONTHLY_DATA, null);
export const getHalfYearlyData = (data: any) => api.get(url.GET_HALFYEARLY_DATA, null);
export const getYearlyData = (data: any) => api.get(url.GET_YEARLY_DATA, null);
