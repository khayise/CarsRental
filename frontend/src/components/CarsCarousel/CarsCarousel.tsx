import React from 'react';
import { CarCard } from '../CarCard/CarCard';
import { useFetchCars } from '../../hooks/api/Cars';

interface CarsCarouselProps {
	limited?: number;
}

export const CarsCarousel: React.FC<CarsCarouselProps> = ({ limited }) => {
	const data = useFetchCars();

	return (
		<>
			<ul className="flex w-full flex-wrap p-1 justify-center gap-4 mt-4">
				{data?.slice(0, limited).map((car) => {
					return (
						<li key={car._id}>
							<CarCard car={car} />
						</li>
					);
				})}
			</ul>
		</>
	);
};
