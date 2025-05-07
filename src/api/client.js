import axios from "axios";

export const axiosInstance = () =>
  axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

axiosInstance().interceptors.response.use((res) => {
  console.log("axios response", res);
  if (res.status === 209) {
    window.location.href = "/login";
  }
});
