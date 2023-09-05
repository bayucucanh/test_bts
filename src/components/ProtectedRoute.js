// src/components/ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Navigate to="/home" /> // Redirect authenticated users away from the login page
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default ProtectedRoute;
