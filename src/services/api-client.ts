import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "04b0b1315e4f45839dd56574e526c6fe"
  }
})