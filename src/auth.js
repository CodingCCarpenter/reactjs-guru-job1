import axios from "axios";
import Api from "./api";

const setAuthorizationHeader = (token = null) => {
  if (!token) {
    localStorage.removeItem('access_token');
  } else {
    localStorage.access_token = token;
  }
};

const setAdditionalHeaders = (data = null) => {
  if (data) {
      localStorage.client_id = data.client_id; 
      localStorage.user_id = data.user_id; 
    } else {
      localStorage.removeItem('user_id');
      localStorage.removeItem('client_id');
    }
};

export const getHeaders = () => {
    return ({
      //"token": localStorage.access_token,
      "Authorization": "bearer " + localStorage.access_token,
      "user_id": localStorage.user_id,
      "client_id": localStorage.client_id,
      'Content-Type': 'application/json'
    });
};

export const login = async credentials => {
  try { 
    const data = await Api.user.login(credentials);
    // save token to local storage and return the user data
    setAuthorizationHeader(data.data.token);
    setAdditionalHeaders(data.data.data) // as is the specs

    return data;

  } catch(err) {
    console.log(err);
    // on error clear token
      logout();
    return null; // for easier checking
  };
};


export const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('user_id');
  localStorage.removeItem('client_id');
  setAuthorizationHeader();
  return true;
};
