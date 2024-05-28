import axios from "axios";

 const LOCAL_BACKEND = 'https://studygpnodetodo.onrender.com';
// const LOCAL_BACKEND='http://localhost:5000'

console.log("proxy", LOCAL_BACKEND);

const api = axios.create({
  baseURL: `${LOCAL_BACKEND}/todo`,
  headers: {
    "Content-Type": "application/json",
    "authorization": "Bearer " +sessionStorage.getItem("token"),

   
  },
});


// Update the token before each request
api.interceptors.request.use(
  (request) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      request.headers["Authorization"] = `Bearer ${token}`;
    }
    console.log("Starting Request", request);
    return request;
  },
  (error) => {
    console.log("REQUEST ERROR", error);
    return Promise.reject(error);
  }
);

// Log and handle response errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errData = error.response ? error.response.data : error;
    console.log("RESPONSE ERROR", errData);
    return Promise.reject(errData);
  }
);


export default api;