// import React from 'react'

const Navigation = () => {
	return (
		<>
			<nav id="nav-menu" className="hidden absolute py-5 lg:py-3 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
				<ul className="block lg:flex">
					<li className="group">
						<a href="index.html" className="list-navbar">
							Beranda
						</a>
						<span className="underline-hover-sm underline-hover-lg"></span>
					</li>
					<li className="group">
						<a href="gallery.html" className="list-navbar">
							Galeri Mobil
						</a>
						<span className="underline-hover-sm underline-hover-lg"></span>
					</li>
					<li className="group">
						<a href="about.html" className="list-navbar">
							Tentang Kami
						</a>
						<span className="underline-hover-sm underline-hover-lg"></span>
					</li>
					<li className="group">
						<a href="myaccount.html" className="list-navbar">
							Akun Saya
						</a>
						<span className="underline-hover-sm underline-hover-lg"></span>
					</li>
					<div className="flex justify-center pt-3 lg:hidden">
						<a href="login.html" className="btn-navbar">
							Masuk
						</a>
						<a href="register.html" className="btn-navbar">
							Daftar
						</a>
					</div>
				</ul>
			</nav>
		</>
	);
};

export default Navigation;
