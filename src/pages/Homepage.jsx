import CarCard from "../components/CarCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import carsData from "../data/cars-data.json";

const Homepage = () => {
	return (
		<>
			<Header />
			<Hero />
			<section className="py-16">
				<div className="container">
					<div className="w-full">
						<div className="max-w-xl mx-auto text-center mb-16">
							<h4 className="font-bold text-primary text-sm md:text-base mb-2 uppercase">Apa yang kita tawarkan</h4>
							<h2 className="font-bold text-2xl md:text-3xl text-black">Kendaraan Unggulan</h2>
						</div>
					</div>
					<div className="flex flex-wrap justify-center">
						{carsData.slice(0, 3).map((car) => (
							<CarCard key={car.id} name={car.name} merk={car.merk} price={car.price} image={car.image} />
						))}
					</div>
				</div>
			</section>
			<Services />
			<Footer />
		</>
	);
};

export default Homepage;
