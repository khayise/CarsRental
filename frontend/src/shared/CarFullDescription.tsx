import React from 'react';
import { CardDescription } from '../components/CarCard/CardDescription';

import IconTransmition from '../assets/icons/transmisson.svg';
import IconCalendar from '../assets/icons/calendar.svg';
import IconEngine from '../assets/icons/engine.svg';
import IconSeats from '../assets/icons/seats.svg';

interface CarFullDescriptionProps {
	car: ICar;
}

export const CarFullDescription: React.FC<CarFullDescriptionProps> = ({ car }) => {
	return (
		<>
			<div className="gap-2 grid grid-cols-2">
				<CardDescription icon={IconTransmition} text={`${car.transmission}`} />
				<CardDescription icon={IconEngine} text={`${car.engineCapacity} L.`} />
				<CardDescription icon={IconCalendar} text={`${car.year}`} />
				<CardDescription icon={IconSeats} text={`${car.seats} seats`} />
			</div>
		</>
	);
};
