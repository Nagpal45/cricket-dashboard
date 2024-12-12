import axios from "axios";

const apiRequest = axios.create({
    baseURL: "https://cricket-dashboard.onrender.com/api/",
    withCredentials: true,
});

export default apiRequest;