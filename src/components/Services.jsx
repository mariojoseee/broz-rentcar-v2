const Services = () => {
	const serviceData = [
		{
			title: "Upacara Pernikahan",
			desc: "Kami menyediakan berbagai mobil piihan untuk upacara pernikahan anda. Mobil yang kami sajikan merupakan mobil kualitas terbaik",
			img: "../src/assets/images/services-img/wedding-car.png",
		},
		{
			title: "Transfer Kota",
			desc: "Kami menyediakan layanan sewa kendaraan untuk perjalanan anda di luar kota. Semua layanan kami terjamin aman, nyaman, dan tentram",
			img: "../src/assets/images/services-img/touring-car.png",
		},
		{
			title: "Transfer Bandara",
			desc: "Kami telah bekerja sama dengan penyedia jasa transportasi terbaik di dunia ini untuk memberikan perjalanan terbaik dari dan ke bandara",
			img: "../src/assets/images/services-img/airport-car.png",
		},
		{
			title: "Tur Seluruh Kota",
			desc: "Kami menyediakan layanan sewa kendaraan untuk perjalanan tur antar kota. Dengan ini anda tidak perlu khawatir dalam tur antar kota",
			img: "../src/assets/images/services-img/touring-car2.png",
		},
	];
	return (
		<>
			<section className="py-16 bg-slate-100">
				<div className="container">
					<div className="w-full">
						<div className="max-w-xl mx-auto text-center mb-16">
							<h4 className="font-bold text-primary text-sm md:text-base mb-2 uppercase">Services</h4>
							<h2 className="font-bold text-2xl md:text-3xl text-black">Layanan yang Kami Berikan</h2>
						</div>
						<div className="flex flex-wrap justify-center">
							{serviceData.map((service, index) => (
								<div key={index} className="w-full md:w-5/12 lg:w-1/5 px-4 pb-10">
									<div className="w-36 h-36 border-4 rounded-full border-black mx-auto p-6">
										<img src={service.img} alt="car-image" className="w-full" />
									</div>
									<div className="p-5 text-center max-w-xs mx-auto">
										<h3 className="font-bold text-lg">{service.title}</h3>
										<p className="mt-2 lg:mt-3">{service.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;
