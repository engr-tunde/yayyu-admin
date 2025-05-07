import { axiosInstance } from "./client";

export const fetcher = ({ url, withCredentials = false }) =>
  axiosInstance()
    .get(url, { withCredentials })
    .then((res) => {
      if (res.status == 209) {
        window.location.href = "/login";
      }
      return res.data;
    })
    .catch((err) => {
      console.log("fetch error", err);
      throw Error(err);
    });

export const sessionFetcher = (url) =>
  axiosInstance()
    .get(url, { withCredentials: true })
    .then((res) => {
      console.log("s res", res);
      if (res.status === 200) {
        return true;
      } else if (res.status === 209) {
        return false;
      }
    })
    .catch((err) => {
      throw Error(err);
    });
