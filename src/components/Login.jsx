import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserEnd, loginUserStart, loginUserSucces } from "../Slice/auth";
import Loader from "./Loader";
import AuthService from "../server/auth";
import ValidationError from "./ValidationError";
import { useNavigate } from "react-router-dom";
const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const { isLoading, loggedIn } = useSelector((state) => state.auth);
	const navigate = useNavigate();

	const loginHandler = async (e) => {
		e.preventDefault();
		dispatch(loginUserStart());
		const user = { email, password };
		try {
			const res = await AuthService.userLogin(user);
			navigate("/chat");
			dispatch(loginUserSucces(res.user));
		} catch (error) {
			dispatch(loginUserEnd(error.response.data.errors));
		}
	};
	useEffect(() => {
		if (loggedIn) {
			navigate("/chat");
		}
	}, [loggedIn]);
	return (
		<div className="text-white flex items-center justify-center h-screen">
			<form onSubmit={(e) => loginHandler(e)} className="flex flex-col">
				<h1 className="text-7xl font-semibold md:text-3xl text-center">
					Tizimga Kirish
				</h1>
				<ValidationError />
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					placeholder="Email"
					className="my-3 mt-9 h-11 max-w-[500px] md:w-full px-3 bg-transparent text-xl border-b outline-none border-b-gray-300"
				/>
				<input
					onChange={(e) => setPassword(e.target.value)}
					type="text"
					placeholder="Parol"
					className="my-3 h-11 max-w-[500px] md:w-full px-3 bg-transparent  text-xl border-b outline-none border-b-gray-300"
				/>{" "}
				<p></p>
				<button
					disabled={isLoading}
					type="submit"
					className="w-[500px] md:w-full  h-11 bg-[#20DF7F] rounded-xl mt-9 text-xl hover:bg-transparent border border-[#20DF7F] duration-150"
				>
					{isLoading ? <Loader /> : "Tizimga Kirish"}
				</button>
			</form>
		</div>
	);
};

export default Login;
