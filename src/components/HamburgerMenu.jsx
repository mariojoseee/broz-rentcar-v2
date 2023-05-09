// import React from 'react'

const HamburgerMenu = () => {
	return (
		<>
			<button id="hamburger" name="hamburger" type="button" className="block absolute right-3 lg:hidden">
				<span className="hamburger-line origin-top-left transition duration-300"></span>
				<span className="hamburger-line transition duration-300"></span>
				<span className="hamburger-line origin-bottom-left transition duration-300"></span>
			</button>
		</>
	);
};

export default HamburgerMenu;
