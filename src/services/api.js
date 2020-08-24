import axios from "axios";

const api = axios.create({
  baseURL: "https://bella-dev.bellamaterna.net.br"
});

export default api;
