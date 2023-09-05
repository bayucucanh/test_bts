import axios from 'axios'
export const loginSuccess = (token) => ({
  type: 'LOGIN_SUCCESS',
  payload: token,
});

export const logout = () => ({ type: 'LOGOUT' });

export const login = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://94.74.86.174:8080/api/login', formData);
      console.log(response);
      const token = response?.data?.data?.token;
      localStorage.setItem('token', token);

      dispatch(loginSuccess(token));
    } catch (error) {
      // Handle login failure (e.g., display an error message)
      console.error('Login failed:', error);
    }
  };
};