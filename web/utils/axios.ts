import * as axios from "axios";

const ajax = axios.create({
  baseURL: "",
  timeout: 10000,
  headers: {
    "X-Custom-Header": "foobar",
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
});



