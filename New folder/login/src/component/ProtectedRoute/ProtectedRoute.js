import React from "react";
 import { Redirect, Route } from "react-router";
  const ProtectedRoute = ({ component: Component, ...restOfProps }) =>{
const isAuthenticated = Boolean(localStorage.getItem('token'))
return (
    <Route
    {...restOfProps}
    render={(props) =>
      isAuthenticated ? <Component {...props}/> : <Redirect to="/" />
    }
    />
);

  }
  export default ProtectedRoute ;