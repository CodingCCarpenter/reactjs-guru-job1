import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { StoreContext } from "../App";



const ProtectedRoute = ({ component: Component, ...rest }) => {


  const context = useContext(StoreContext);

  const isAuthenticated = () => {
      let auth = false
      if(localStorage.access_token) {
        auth = true;
      }
      return auth;
  }

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}


export default ProtectedRoute;