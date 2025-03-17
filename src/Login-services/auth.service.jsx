import axios from "axios";

const API_URL = "http://localhost:1111/Admin/auth/";

class AuthService {
  async login(username, password) {
    const response = await axios
      .post(API_URL + "signin", {
        username,
        password
      });
    if (response.data.accessToken) {
      localStorage.setItem("admin", JSON.stringify(response.data));
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem("admin");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('admin'));;
  }
}

export default new AuthService();
