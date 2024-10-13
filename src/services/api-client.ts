import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "55bd4bf7b4af4433b1e3031bbe703cc7",
  },
});
