import axios from "axios";
// import { getItem } from "../helpers/persistance-storeg";

axios.defaults.baseURL = "https://api.realworld.io/api";

axios.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');
	// console.log(token);
	const authorization = token ? `Token ${token}` : "";
	// console.log(authorization);
	config.headers.Authorization = authorization;
	return config;
});
export default axios;
