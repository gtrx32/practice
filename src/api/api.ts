import axios from "axios";

const mainApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default mainApi;
