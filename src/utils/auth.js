// auth.js
class AuthService {
  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  removeToken() {
    localStorage.removeItem('token');
  }

  isAuthenticated() {
    const token = this.getToken();
    // Check if the token is valid and not expired (You can use a library like `jwt-decode`)
    // Return true if the token is valid; otherwise, return false.
  }
}

export default new AuthService();
