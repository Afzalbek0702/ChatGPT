import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UserLogo from "../../public/large (2).png";
import { useSelector } from "react-redux";

const Navbar = () => {
	const { loggedIn, user } = useSelector((state) => state.auth);
	return (
		<div className="px-24 md:px-2 h-16 flex items-center justify-between text-white font-semibold text-xl">
			<div className="flex items-center sm:text-xl">
				<img src={UserLogo} className="w-12 sm:w-9 rounded-full mr-2" />
				<h1 className="md:text-base">ChatBot</h1>
			</div>
			<div>
				{loggedIn ? (
					<h2 className="text-base sm:text-xs">User:{user.username}</h2>
				) : (
					<div>
						<button className="border px-7 md:px-3 sm:text-sm py-1 rounded-2xl mx-2 hover:scale-110 duration-100">
							<Link to={"/login"}>Login</Link>
						</button>
						<button className="border px-5 md:px-3 sm:text-sm py-1 rounded-2xl mx-2 hover:scale-110 duration-100">
							<Link to={"/registr"}>Sign up</Link>
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
