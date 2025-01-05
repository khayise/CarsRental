import React from 'react';

import { CarFullDescription } from '../../shared/CarFullDescription';
import { Link } from 'react-router-dom';
import { useDateRangeStore } from '../../store/dateRangeStore';
import { MotionCard } from 'src/shared/MotionCard';
import { appearAnimationConfig } from 'src/framer-configs/appear';

interface CarListItemProps {
	car: ICar;
}

export const CarListItem: React.FC<CarListItemProps> = ({ car }) => {
	const { startDate, endDate } = useDateRangeStore();

	const DAYS = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) + 1;

	const TOTAL = Math.floor(DAYS * car.basePrice);

	return (
		<>
			<Link to={`/cars/${car._id}`}>
				<MotionCard
					animationConfig={appearAnimationConfig}
					className="flex flex-wrap flex-grow justify-center gap-10 outline-my-gray hover:outline outline-1">
					<img className="w-[370px] h-[200px]" src={car.img} alt="" />
					<div className="flex flex-col justify self-start">
						<div className="flex flex-col gap-4 self-start">
							<h3 className="font-medium">{car.name}</h3>
							<CarFullDescription car={car} />
						</div>
					</div>
					<div className="flex flex-col flex-1 justify-between gap-y-6">
						<div className="flex flex-col">
							<span className="font-medium text-lg">
								&#3647;{car.basePrice} <span className="font-normal"> per day</span>
							</span>
							<span className="font-light text-base text-my-gray-200">
								Total: &#3647;{TOTAL} for {DAYS} {DAYS > 1 ? 'days' : 'day'}
							</span>
						</div>
						<button className="justify-self-end p-2 w-full min-w-40 text-white button">Book</button>
					</div>
				</MotionCard>
			</Link>
		</>
	);
};
