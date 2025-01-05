import React from 'react';

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
			<div className="flex flex-col gap-2 bg-white outline-my-gray p-4 rounded-lg max-w-96 h-full hover:outline outline-1">
				<Link to={`/cars/${car._id}`}>
					<img src={car.img} className="w-[353px] h-[183px]" alt="" />
				</Link>
				<h3 className="font-medium">{car.name}</h3>
				<CarFullDescription car={car} />

				<div className="flex justify-between items-center">
					<span>
						from
						<span className="font-bold text-lg"> {car.basePrice}&#3647; </span>
						per day
					</span>
					<button
						onClick={() => navigateHandler(`/cars/${car._id}`)}
						className="bg-my-blue px-6 p-2 rounded-lg max-w-[50%] text-white">
						Book
					</button>
				</div>
			</div>
		</>
	);
});
