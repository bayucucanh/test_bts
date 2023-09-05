// src/components/Login.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authActions";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan validasi form, dan jika valid, kirim data ke server untuk otentikasi.
    // Contoh validasi sederhana: pastikan bahwa username dan password tidak kosong.
    if (formData.username && formData.password) {
      // Kirim data ke server atau lakukan otentikasi di sini.
      dispatch(login(formData));
      console.log("Data login:", formData);
    } else {
      alert("Username dan password harus diisi.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
