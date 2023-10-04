import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserEnd, loginUserStart, loginUserSucces } from "../Slice/auth";
import AuthService from "../server/auth";
import ValidationError from "./ValidationError";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isLoading, loggedIn } = useSelector((state) => state.auth);
	const registrHandler = async (e) => {
		e.preventDefault();
		dispatch(loginUserStart());
		const user = { username: userName, email, password };
		try {
			const res = await AuthService.userRegistr(user);
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
			<form onSubmit={registrHandler} className=" text-center flex flex-col items-center">
            <h1 className="text-7xl font-semibold md:text-3xl">Ro'yxatdan o'tish</h1>
				<ValidationError />
				<input
					onChange={(e) => setUserName(e.target.value)}
					type="text"
					placeholder="Username"
					className="my-3 mt-9 h-11 w-[500px] px-3 md:w-full  bg-transparent text-xl border-b outline-none border-b-gray-300"
				/>
				<input
					onChange={(e) => setEmail(e.target.value)}
					type="text"
					placeholder="Email"
					className="my-3 h-11 w-[500px] px-3 md:w-full  bg-transparent text-xl border-b outline-none border-b-gray-300"
				/>
				<input
					onChange={(e) => setPassword(e.target.value)}
					type="text"
					placeholder="Parol"
					className="my-3 h-11 w-[500px] px-3 md:w-full bg-transparent text-xl border-b outline-none border-b-gray-300"
				/>{" "}
				<button
					disabled={isLoading}
					type="submit"
					className="w-[500px] md:w-full h-11 bg-[#20DF7F] rounded-xl mt-9 text-xl hover:bg-transparent border border-[#20DF7F] duration-150"
				>
					{isLoading ? <Loader /> : "Ro'yxatdan o'tish"}
				</button>
			</form>
		</div>
	);
};

export default SignUp;
