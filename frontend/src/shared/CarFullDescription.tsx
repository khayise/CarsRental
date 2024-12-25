import React from 'react';
import { CardDescription } from '../components/CarCard/CardDescription';

import IconTransmition from '../assets/icons/transmisson.svg';
import IconCalendar from '../assets/icons/calendar.svg';
import IconEngine from '../assets/icons/engine.svg';
import IconSeats from '../assets/icons/seats.svg';
import { ICar } from '../../types/ICar';

interface CarFullDescriptionProps {
	car: ICar;
}

export const CarFullDescription: React.FC<CarFullDescriptionProps> = ({ car }) => {
	return (
		<>
			<div className="grid grid-cols-2 gap-2">
				<CardDescription icon={IconTransmition} text={`${car.transmission}`} />
				<CardDescription icon={IconEngine} text={`${car.engineCapacity} L.`} />
				<CardDescription icon={IconCalendar} text={`${car.year}`} />
				<CardDescription icon={IconSeats} text={`${car.seats} seats`} />
			</div>
		</>
	);
};
