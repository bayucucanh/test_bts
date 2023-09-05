// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import { useSelector } from 'react-redux';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
  const token = localStorage.getItem('token')

  useEffect(() => {
    console.log(token);
  }, [])
  return (
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/home" Component={Home} />
      </Routes>
  );
};

export default App;
