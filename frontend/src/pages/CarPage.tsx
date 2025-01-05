import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Card } from '../shared/Card';
import { PriceCard } from '../components/CarPage/PriceCard';
import { CarFullDescription } from 'src/shared/CarFullDescription';
import { OrderForm } from '@components/OrderForm/OrderForm';
import { FreeCancelationAlert } from 'src/shared/FreeCancelationAlert';
import { RentConditionsTabs } from 'src/shared/RentConditionsTabs';
import { InsuranceInfo } from 'src/shared/InsuranceInfo';
import { InsurancePriceObserver } from 'src/features/InsurancePriceObserver';

interface CarPageProps {}

export const CarPage: React.FC<CarPageProps> = ({}) => {
	const { carId } = useParams<{ carId: string }>();

	async function fetchCar(carId: string) {
		const car = await axios.get<ICar>(`http://localhost:3000/cars/${carId}`);
		return car.data;
	}

	const { data: car } = useQuery({
		queryKey: [carId],
		queryFn: () => fetchCar(carId as string),
		staleTime: 1000 * 60 * 3,
	});

	return (
		<InsurancePriceObserver car={car}>
			<div className="bg-my-blue pt-4">
				<div className="flex flex-col justify-start items-center bg-my-gray p-6 rounded-t-3xl">
					<div className="relative flex lg:flex-row flex-col gap-6 container">
						<Card className="flex flex-col flex-grow gap-12 lg:self-start">
							<div className="flex lg:flex-row flex-col gap-10 w-full">
								<img className="w-[400px] h-[200px]" src={car?.img} alt="" />
								<div className="flex flex-col gap-2">
									<h3 className="font-medium">{car?.name}</h3>
									{car && <CarFullDescription car={car} />}
								</div>
							</div>
							<FreeCancelationAlert />
							<InsuranceInfo />
							<RentConditionsTabs />
						</Card>
						<div className="flex flex-col flex-grow lg:flex-grow-0 flex-shrink-0 gap-6">
							{car && <PriceCard car={car} />}
							<OrderForm />
						</div>
					</div>
				</div>
			</div>
		</InsurancePriceObserver>
	);
};
