import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Chat from "./components/Chat";
import { useDispatch } from "react-redux";
import { loginUserSucces } from "./Slice/auth";
import AuthService from "./server/auth";

const App = () => {
	// const navigate = useNavigate()
	// const token = localStorage.getItem()
	const dispatch = useDispatch();
	const getUser = async () => {
		try {
			const res = await AuthService.getuser();
			dispatch(loginUserSucces(res.user));
		} catch (error) {
			console.log(error);
			// dispatch(signUserFailure(error.response.data.error));
		}
	};
	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			getUser();
		}
	}, []);
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/registr" element={<SignUp />} />
				<Route path="/chat" element={<Chat />} />
			</Routes>
		</>
	);
};

export default App;
