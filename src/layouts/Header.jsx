// import React from 'react'
import HamburgerMenu from "../components/HamburgerMenu";
import Navigation from "../components/Navigation";
import brozRentcarLogo from "../assets/images/logo.png";

const Header = () => {
	return (
		<header className="bg-gray-300 absolute top-0 left-0 w-full flex items-center z-10">
			<div className="container">
				<div className="flex items-center justify-between relative py-2 lg:px-6">
					<div>
						<a href="index.html">
							<img className="w-24 lg:w-28" src={brozRentcarLogo} alt="logo" />
						</a>
					</div>
					<div className="flex items-center">
						<HamburgerMenu />
						<Navigation />
					</div>
					<div className="hidden lg:flex lg:justify-center">
						<a href="login.html" className="btn-navbar">
							Masuk
						</a>
						<a href="register.html" className="btn-navbar">
							Daftar
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
