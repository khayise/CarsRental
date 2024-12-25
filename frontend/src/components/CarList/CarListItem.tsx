import React from 'react';
import { ICar } from '../../../types/ICar';
import { CarFullDescription } from '../../shared/CarFullDescription';
import { Card } from '../../shared/Card';
import useDateRangeStore from '../../../store/dateRangeStore';
import { Link } from 'react-router-dom';

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
				<Card className="flex-grow justify-center flex-wrap flex gap-10">
					<img className="h-[200px] w-[370px]" src={car.img} alt="" />
					<div className="flex justify self-start  flex-col ">
						<div className="flex flex-col self-start gap-4">
							<h3 className="font-medium">{car.name}</h3>
							<CarFullDescription car={car} />
						</div>
					</div>
					<div className="flex flex-1 gap-y-6 flex-col justify-between">
						<div className="flex flex-col">
							<span className="font-medium text-lg">
								&#3647;{car.basePrice} <span className="font-normal"> per day</span>
							</span>
							<span className="text-base font-light text-my-gray-200">
								Total: &#3647;{TOTAL} for {DAYS} {DAYS > 1 ? 'days' : 'day'}
							</span>
						</div>
						<button className="button w-full min-w-40 text-white p-2 justify-self-end">Book</button>
					</div>
				</Card>
			</Link>
		</>
	);
};
