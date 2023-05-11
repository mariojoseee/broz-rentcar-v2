import CarCard from "../components/CarCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import carsData from "../data/cars-data.json";

const Gallery = () => {
	return (
		<>
			<Header />
			<section className="mt-28 lg:mt-32">
				<div className="container">
					<div className="w-full">
						<div className="max-w-xl mx-auto text-center mb-16">
							<h2 className="font-bold text-2xl text-primary mb-2 uppercase">Galeri Mobil</h2>
							<h3 className="font-bold text-lg md:text-xl text-black">Kendaraan yang Kami Tawarkan</h3>
						</div>
					</div>
					<div className="flex flex-wrap justify-center">
						{carsData.map((car) => (
							<CarCard key={car.id} name={car.name} merk={car.merk} price={car.price} image={car.image} />
						))}
					</div>
					<div className="flex items-center justify-center mt-8 mb-12">
						<ul className="inline-flex">
							<li>
								<button className="h-10 px-5 text-primary transition-colors duration-150 rounded-l-lg focus:shadow-outline hover:bg-blue-100">
									<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
										<path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
									</svg>
								</button>
							</li>
							<li>
								<button className="h-10 px-5 text-white transition-colors duration-150 bg-primary border">1</button>
							</li>
							<li>
								<button className="h-10 px-5 text-primary transition-colors duration-150 hover:bg-blue-100">2</button>
							</li>
							<li>
								<button className="h-10 px-5 text-primary transition-colors duration-150 hover:bg-blue-100">3</button>
							</li>
							<li>
								<button className="h-10 px-5 text-primary transition-colors duration-150 bg-white rounded-r-lg hover:bg-blue-100">
									<svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
										<path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
									</svg>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Gallery;
