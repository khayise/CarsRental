import React from 'react';
import { Filters } from '../components/Header/Filters';
import { CarsCarousel } from '../components/CarsCarousel/CarsCarousel';
import { StickedHeader } from '../components/Header/StickedHeader';

import { useNavigateHandler } from '../hooks/useNagivateHandler';

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
	const navigateHandler = useNavigateHandler();

	return (
		<>
			<StickedHeader key={'header'} />
			<div className="bg-image w-full py-32 flex justify-center items-center relative z-0 blacked">
				<div className="container gap-2 text-white flex flex-col  justify-center items-center">
					<h1 className="">Car rental in Phuket</h1>
					<h3 className="font-medium">the best car rental conditions on the whole island</h3>
					<p className="text-[18px] font-light">We have been working in Thailand since 2013</p>
					<Filters />
				</div>
			</div>
			<div className="flex justify-center mt-16 w-full">
				<div className="container mx-auto flex flex-col items-center">
					<div className="flex w-full flex-col gap-2">
						<h2 className="text-my-black-100">Choose your car</h2>
						<p className="text-my-gray-100 text-md ">Car rentals from trusted owners</p>
					</div>
					<section className="w-full flex flex-col items-center">
						<CarsCarousel limited={3} />
					</section>
					<button
						onClick={() => navigateHandler('/cars/search')}
						className="p-4 mt-10 w-1/3 text-white button">
						Show more
					</button>
					<section className="mt-20">
						<h2>About us</h2>
					</section>
				</div>
			</div>
		</>
	);
};
