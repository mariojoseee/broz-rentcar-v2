/* eslint-disable react/prop-types */
const CarCard = ({ name, merk, price, image }) => {
	return (
		<>
			<div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 pb-10">
				<div className="bg-white max-w-xs border border-gray-200 rounded-lg shadow-lg mx-auto p-2 hover:scale-105 transition duration-500">
					<div className="h-52 flex items-center">
						<a href="#">
							<img src={image} alt="car-image" className="w-full" />
						</a>
					</div>
					<div className="pt-5 pb-3 px-4">
						<h3 className="font-bold">{name}</h3>
						<div className="mt-1 flex justify-between">
							<h4 className="text-slate-500 font-semibold">{merk}</h4>
							<p className="text-slate-500 font-semibold">
								<span className="text-primary font-bold">Rp. {price}</span> -/hari
							</p>
						</div>
						<div className="mt-3 flex justify-between">
							<a href="#" className="font-semibold w-1/2 text-center py-2 rounded-full bg-sky-600 text-white hover:bg-sky-500 transition duration-300 mr-3">
								Booking
							</a>
							<a href="#" className="font-semibold w-1/2 text-center py-2 rounded-full bg-teal-500 text-white hover:bg-teal-400 transition duration-300">
								Spesifikasi
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CarCard;
