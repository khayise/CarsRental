import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Card } from '../shared/Card';
import { ICar } from '../../types/ICar';
import { PriceCard } from '../components/CarPage/PriceCard';

interface CarProps {}

export const Car: React.FC<CarProps> = ({}) => {
	const { carId } = useParams<{ carId: string }>();

	async function fetchCar(carId: string) {
		const car = await axios.get<ICar>(`http://localhost:3000/cars/${carId}`);
		return car.data;
	}

	const { data: car } = useQuery({
		queryKey: [carId],
		queryFn: () => fetchCar(carId as string),
		enabled: !!carId,
		staleTime: 1000 * 60 * 3,
	});

	return (
		<>
			<div className="bg-my-blue pt-4">
				<div className="bg-my-gray p-6 flex flex-col justify-start items-center rounded-t-3xl">
					<div className="container relative flex-col lg:flex-row flex gap-6">
						<Card className="flex-grow h-screen "></Card>
						{car && <PriceCard car={car} />}
					</div>
				</div>
			</div>
		</>
	);
};
