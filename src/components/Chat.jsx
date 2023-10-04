import { useEffect, useRef, useState } from "react";
import Logo from "../../public/download.png";
import Loader from "./Loader";
import UserLogo from "../../public/large (2).png";
import { FiSend } from "react-icons/fi";
import { postServer } from "../server/chat";
import copy from "copy-to-clipboard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Chat = () => {
	const { loggedIn, user } = useSelector((state) => state.auth);
	const msgend = useRef(null);
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([
		{
			text: "Hello, How can I help you",
			bot: true,
			isLoading: false,
		},
	]);
	useEffect(() => {
		msgend?.current?.scrollIntoView();
	}, [messages]);
	const submitHandler = async (e) => {
		setInput("");
		e.preventDefault();
		setMessages([
			...messages,
			{
				text: input,
				bot: false,
				isLoading: false,
			},
			{
				text: null,
				bot: true,
				isLoading: true,
			},
		]);
		const res = await postServer(input).then((text) => text);
		setMessages([
			...messages,
			{
				text: input,
				bot: false,
				isLoading: false,
			},
			{
				text: res,
				bot: true,
				isLoading: false,
			},
		]);
	};
	return (
		<div className="overflow-hidden font-slab h-screen">
			<div className="text-white flex justify-between items-center px-10 sm:px-3 py-2">
				<Link to={"/"} className="text-3xl sm:text-2xl ">
					ChatBot
				</Link>
				<div className="flex items-center">
					<h2 className="mr-2 ">{user.username}</h2>
					<img src={UserLogo} className="w-9 rounded-full mr-2" />
				</div>
			</div>
			<div className="flex flex-col px-48 md:px-2 overflow-y-scroll h-[80vh] scrol">
				{messages.map((item, i) => (
					<div key={i} className="bg px-10 md:px-1 py-6 my-5">
						<div className="text-white flex items-start justify-start">
							<img
								src={item.bot ? Logo : UserLogo}
								alt=""
								className="w-10 md:w-8"
							/>
							{item.isLoading ? (
								<div className="ml-4 mt-2 text-xl">
									Typing <Loader />
								</div>
							) : (
								<h1 className="text-xl md:text-lg ml-4 word">{item.text}</h1>
							)}
						</div>
						<button
							onClick={() => copy(item.text)}
							className={`text-white float-right ${
								item.bot ? "block" : "hidden"
							}`}
						>
							Copy
						</button>
					</div>
				))}
				<div ref={msgend} />
			</div>
			<form
				onSubmit={(e) => submitHandler(e)}
				className="flex justify-center w-1/2 md:w-full px-5 mt-7 md:mt-3 mx-auto bg-zinc-900 rounded-xl"
			>
				<input
					onChange={(e) => setInput(e.target.value)}
					value={input}
					type="text"
					placeholder="Biror narsa so'rang"
					className=" text-xl md:text-lg text-white w-full  h-12 bg-transparent outline-none"
				/>
				<button className="text-white text-2xl flex items-center">
					<FiSend />
				</button>
			</form>
		</div>
	);
};

export default Chat;
