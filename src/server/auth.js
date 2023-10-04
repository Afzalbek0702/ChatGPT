import axios from "./api";
const AuthService = {
	async userRegistr(user) {
		const { data } = await axios.post("/users", { user });
		return data;
	},
	async userLogin(user) {
		const { data } = await axios.post("/users/login", { user });
		return data;
	},
	async getuser() {
		const { data } = await axios.get("/user");
		return data;
	},
};
export default AuthService;
