// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';

const App = () => {
  const isAuthenticated = false; // Replace with your authentication logic (e.g., Redux state)

  return (
    <>
    <Router>
      {/* <Routes> */}
        <Route path="/login" Component={Login} />
        <ProtectedRoute
          path="/home"
          component={Home}
          isAuthenticated={isAuthenticated}
        />
        <Navigate from="/" to="/home" />
      {/* </Routes> */}
    </Router>
    </>
  );
};

export default App;
