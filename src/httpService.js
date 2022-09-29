import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser?.payload;
const TOKEN = currentUser?.accessToken;

export const generalRequest = axios.create({});

export const userRequest = axios.create({
  headers: { token: `Bearer ${TOKEN}` },
});
