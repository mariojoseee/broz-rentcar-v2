// import React from "react";
import heroLogoMobile from "../assets/images/hero-mobile.png";

export default function Hero() {
	return (
		<>
			<section className="mt-[70px] py-14 lg:py-0 lg:mt-0">
				<div className="container lg:px-0">
					<div className="w-full lg:hidden">
						<img src={heroLogoMobile} alt="Broz Rent Car" className="w-80 sm:w-96 md:w-2/3 mx-auto hover:scale-110 duration-700" />
						<h1 className="mt-10 text-center text-2xl md:text-3xl font-extrabold text-primary">Broz Rent Car</h1>
						<p className="mt-3 text-center text-base md:text-lg font-semibold text-black">Cara Cepat & Mudah Untuk Menyewa Mobil</p>
						<div className="mt-16 text-center animate-bounce">
							<p className="font-semibold text-xs mb-1">Scroll</p>
							<svg className="w-10 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
							</svg>
						</div>
					</div>
				</div>
				<div style="background-image: url('../assets/images/bg-700.jpg')" className="hidden relative text-white lg:block bg-cover bg-center bg-fixed lg:h-screen">
					<div className="absolute left-1/2 -translate-x-1/2 bottom-3 animate-bounce">
						<p className="font-semibold mb-1">Scroll</p>
						<svg className="w-10 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
						</svg>
					</div>
				</div>
			</section>
			<hr className="mx-8 border-t-2 lg:hidden" />
		</>
	);
}
