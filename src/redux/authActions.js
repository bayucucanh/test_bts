import axios from 'axios'
export const loginSuccess = (user, token) => ({
  type: 'LOGIN_SUCCESS',
  payload: { user, token },
});

export const logout = () => ({ type: 'LOGOUT' });

export const login = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://94.74.86.174:8080/api/login', formData);
      console.log(response);
      const { user, token } = response.data;

      dispatch(loginSuccess(user, token));
    } catch (error) {
      // Handle login failure (e.g., display an error message)
      console.error('Login failed:', error);
    }
  };
};