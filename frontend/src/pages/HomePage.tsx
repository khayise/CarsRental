import React from 'react';
import { Filters } from '../components/Header/Filters';
import { CarsCarousel } from '../components/CarsCarousel/CarsCarousel';
import { StickedHeader } from '../components/Header/StickedHeader';

import { useNavigateHandler } from '../hooks/useNagivateHandler';
import { QuestionsSection } from '@components/QuestionsSection/QuestionsSection';
import { Footer } from '@components/Footer/Footer';

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = ({}) => {
	const navigateHandler = useNavigateHandler();

	return (
		<>
			<StickedHeader key={'header'} />
			<div className="relative z-0 flex justify-center items-center bg-image py-32 w-full blacked">
				<div className="flex flex-col justify-center items-center gap-2 text-white container">
					<h1 className="">Car rental in Phuket</h1>
					<h3 className="font-medium">the best car rental conditions on the whole island</h3>
					<p className="font-light text-[18px]">We have been working in Thailand since 2013</p>
					<Filters />
				</div>
			</div>
			<div className="flex justify-center mt-16 w-full">
				<div className="flex flex-col items-center mx-6 w-full max-w-[1280px]">
					<div className="flex flex-col gap-2 w-full">
						<h2 className="text-my-black-100">Choose your car</h2>
						<p className="text-md text-my-gray-100">Car rentals from trusted owners</p>
					</div>
					<section className="flex flex-col items-center w-full">
						<CarsCarousel limited={3} />
						<button
							onClick={() => navigateHandler('/cars/search')}
							className="mt-10 p-4 w-full sm:w-1/3 text-white button">
							Show more
						</button>
					</section>

					<QuestionsSection />
				</div>
			</div>
			<Footer />
		</>
	);
};
