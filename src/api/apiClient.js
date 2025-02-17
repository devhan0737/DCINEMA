import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.example.com", // 실제 API 주소로 변경
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
