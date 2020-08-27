import axios from "axios";

export default axios.create({
  baseURL: "https://hairsalon.herokuapp.com/",
  responseType: "json"
});