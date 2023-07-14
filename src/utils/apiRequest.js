import axios from "axios";
import endPoints from "./endPoints";

// setup base thing
const apiRequest = axios.create({
  baseURL: endPoints.baseUrl,
  responseType: "json",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

apiRequest.interceptors.response.use(
  (response) => {
    if (response.status == 200) {
      return Promise.resolve(response);
    }
  },
  (error) => {
    // todo for login
    if (error.response.status == 401) {
    }
    return Promise.reject(error.response);
  }
);

export default apiRequest;
