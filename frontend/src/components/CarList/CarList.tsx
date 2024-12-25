import React, { useEffect, useState } from 'react';
import { useFetchCars } from '../../hooks/api/Cars';
import { CarListItem } from './CarListItem';
import { ICar } from '../../../types/ICar';
import { sortCars } from '../../functions/filtres';
import useSortStore from '../../../store/sortStore';

interface CarListProps {}

export const CarList: React.FC<CarListProps> = ({}) => {
	const [sorted, setSorted] = useState<ICar[]>([]);
	const cars = useFetchCars();

	const { filterDirection } = useSortStore();

	useEffect(() => {
		if (cars) {
			sortCars(cars, setSorted, filterDirection);
		}
	}, [cars, filterDirection]);
	return (
		<>
			<ul className="flex flex-col gap-6">
				{sorted?.map((car) => <CarListItem key={car._id} car={car} />)}
			</ul>
		</>
	);
};
