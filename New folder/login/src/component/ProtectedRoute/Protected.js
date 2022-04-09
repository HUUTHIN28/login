import React from "react";
 import { Redirect, Route } from "react-router";
  const Protected = ({ component: Component, ...restOfProps }) =>{
const isAuthenticated = Boolean(localStorage.getItem('token'))
return (
    <Route
    {...restOfProps}
    render={(props) =>
      isAuthenticated ? <Redirect to="/loginerror"/>  : <Component {...props}/> 
    }
    />
);

  }
  export default Protected ;