import React from 'react';

import { ICar } from '../../../types/ICar';

import { Link } from 'react-router-dom';
import { CarFullDescription } from '../../shared/CarFullDescription';
import { useNavigateHandler } from '../../hooks/useNagivateHandler';

interface CarCardProps {
	car: ICar;
}

export const CarCard: React.FC<CarCardProps> = React.memo(({ car }) => {
	const navigateHandler = useNavigateHandler();

	return (
		<>
			<div className="h-full flex flex-col gap-2 max-w-96 p-4 rounded-lg bg-white hover:outline outline-1 outline-my-gray">
				<Link to={`/cars/${car._id}`}>
					<img src={car.img} className="w-[353px] h-[183px]" alt="" />
				</Link>
				<h3 className="font-medium">{car.name}</h3>
				<CarFullDescription car={car} />

				<div className="flex items-center justify-between">
					<span>
						from
						<span className="text-lg font-bold"> {car.basePrice}&#3647; </span>
						per day
					</span>
					<button
						onClick={() => navigateHandler(`/cars/${car._id}`)}
						className="p-2 px-6 max-w-[50%] rounded-lg bg-my-blue text-white">
						Book
					</button>
				</div>
			</div>
		</>
	);
});
