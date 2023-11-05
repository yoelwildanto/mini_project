import axios from "axios";
import authHeader from "./Auth-Header";

const API_URL = "http://localhost:3000/";

const getUser = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

export default {
  getUser,
};
