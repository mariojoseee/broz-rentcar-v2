import { useState } from "react";
import brozRentcarLogo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
	const menuList = [
		{
			title: "Beranda",
			url: "/",
		},
		{
			title: "Galeri Mobil",
			url: "/gallery",
		},
		{
			title: "Tentang Kami",
			url: "/about",
		},
		{
			title: "Akun Saya",
			url: "/myaccount",
		},
	];

	const [hamburgerState, setHamburgerState] = useState(false);
	const [navMenuState, setNavMenuState] = useState(false);

	function handleClick() {
		setHamburgerState((hamburgerState) => !hamburgerState);
		setNavMenuState((navMenuState) => !navMenuState);
	}
	let toogleClassHamburger = hamburgerState ? "hamburger-active " : "";
	let toogleClassNavMenu = navMenuState ? "" : "hidden ";

	return (
		<>
			<header className="bg-gray-300 fixed top-0 left-0 w-full border-b-1 border-gray-400 flex items-center z-10">
				<div className="container">
					<div className="flex items-center justify-between relative py-2 lg:px-6">
						<div>
							<Link to="/">
								<img className="w-24 lg:w-28" src={brozRentcarLogo} alt="logo" />
							</Link>
						</div>
						<div className="flex items-center">
							<button onClick={handleClick} name="hamburger" type="button" className={`${toogleClassHamburger}block absolute right-3 lg:hidden`}>
								<span className="hamburger-line origin-top-left transition duration-300"></span>
								<span className="hamburger-line transition duration-300"></span>
								<span className="hamburger-line origin-bottom-left transition duration-300"></span>
							</button>
							<nav onClick={handleClick} className={`${toogleClassNavMenu}absolute py-5 lg:py-3 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}>
								<ul className="block lg:flex">
									{menuList.map((menu, index) => (
										<li key={index} className="group">
											<Link to={menu.url} className="list-navbar">
												{menu.title}
											</Link>
											<span className="underline-hover-sm underline-hover-lg"></span>
										</li>
									))}

									<div className="flex justify-center pt-3 lg:hidden">
										<Link to="/login" className="btn-navbar">
											Masuk
										</Link>
										<Link to="/register" className="btn-navbar">
											Daftar
										</Link>
									</div>
								</ul>
							</nav>
						</div>
						<div className="hidden lg:flex lg:justify-center">
							<Link to="/login" className="btn-navbar">
								Masuk
							</Link>
							<Link to="/register" className="btn-navbar">
								Daftar
							</Link>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
