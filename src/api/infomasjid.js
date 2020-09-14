import axios from "axios";

export default axios.create({
  baseURL: "http://infomasjid.my.id/api",
  headers: {
    Authorization: "",
  },
});
