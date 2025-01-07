import React from 'react';
import { CarCard } from '../CarCard/CarCard';
import { useFetchCars } from '../../hooks/api/Cars';
import { CarCardSkeleton } from '@components/CarCard/CarCardSkeleton';

interface CarsCarouselProps {
	limited?: number;
}

export const CarsCarousel: React.FC<CarsCarouselProps> = ({ limited }) => {
	const { data, isLoading } = useFetchCars();

	const skeletonArr = new Array(3).fill(0);

	return (
		<>
			<ul className="flex flex-wrap justify-center gap-4 mt-4 p-1 w-full">
				{!isLoading
					? data?.slice(0, limited).map((car) => {
							return (
								<li key={car._id}>
									<CarCard car={car} />
								</li>
							);
						})
					: skeletonArr.map((_, index) => <CarCardSkeleton key={index} />)}
			</ul>
		</>
	);
};
