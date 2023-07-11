import axios from "axios";

export default axios.create({
  baseURL: "https://thinkzone.in.net/thinkzone/", //New Tests
  // baseURL: 'https://thinkzone.co/thinkzone/', // Production New
});
