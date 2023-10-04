import React from 'react'
import Header from "./Header";
import { BsInstagram } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import Navbar from './Navbar';
const Home = () => {
  return (
		<div className="flex w-full h-screen flex-col justify-between font-jura">
			<Navbar />
			<Header />
			<div className="flex items-center justify-around text-white flex-wrap mt-10">
				<h1 className="text-lg sm:text-lg">©2023 Afzalbek Dev</h1>
				<div className="flex">
					<a href="https://www.instagram.com/afzalbek0207">
						<BsInstagram className="text-3xl mx-2 sm:text-base" />
					</a>
					<a href="https://t.me/Afzalbek_0702">
						<FaTelegram className="text-3xl mx-2 sm:text-base" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Home