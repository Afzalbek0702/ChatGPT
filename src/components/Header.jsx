import React from "react";

// import Logo from "../../public/Logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	const handler = () => {
		if (localStorage.getItem("token")) navigate("/chat");
		else navigate("/registr");
	};
	return (
		<>
			<div className="mt-20 md:px-2 text-white mx-auto text-center">
				<h1 className="text-8xl md:text-5xl font-normal">Chat Bot</h1>
				<h2 className="text-xl md:text-sm mt-4 font-medium max-w-[600px]">
					Assalomu alaykum foydalanuvchi.Siz ushbu saytda chat GPT sun'iy
					intelektidan bepul foydalanishingiz mumkun. Sizdan ushbu sun'iy
					intelekdan <span className="text-green-500">INGLIZ</span> yoki{" "}
					<span className="text-green-500">RUS</span> tillarida
					foydalanishingizni so'rab qolamiz, chunki sun'iy intelek shu tillarda
					yaxshi faoliyat olib boradi. <br />
					<span className="text-emerald-400 ">
						Hozirda kamchiliklar ustida ish olib borilmoqda.
					</span>
				</h2>
				<button
					onClick={handler}
					className="border px-10 py-1 rounded-2xl mx-2 text-xl mt-7 hover:scale-110 duration-100"
				>
					Boshlash
				</button>
			</div>
		</>
	);
};

export default Header;
