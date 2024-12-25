import React from 'react';
import { CarFullDescription } from '../../shared/CarFullDescription';
import { ICar } from '../../../types/ICar';
import { Card } from '../../shared/Card';
import useDateRangeStore from '../../../store/dateRangeStore';

interface PriceCardProps {
	car: ICar;
}

export const PriceCard: React.FC<PriceCardProps> = ({ car }) => {
	const { startDate, endDate } = useDateRangeStore();

	const DAYS = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) + 1;
	const DEPOSIT = 7000;
	const PICK_UP_FEE = 600;
	const DROP_OF_FEE = 600;
	const RENTAL_PRICE = DAYS * car.basePrice;
	const TAX_PERCNETAGE = 0.07;
	const TAX = Math.floor((RENTAL_PRICE + PICK_UP_FEE + DROP_OF_FEE) * TAX_PERCNETAGE);
	const TOTAL_PRICE = DEPOSIT + RENTAL_PRICE + PICK_UP_FEE + DROP_OF_FEE + TAX;

	return (
		<>
			<Card className="flex flex-grow w-full lg:flex-grow-0 lg:w-auto flex-col gap-6 lg:sticky top-6 self-start h-auto ">
				<div className="flex gap-4">
					<img className="w-[200px] h-[100px]" src={car?.img} alt="" />
					<div className="flex flex-col gap-2">
						<h3 className="font-medium">{car?.name}</h3>
						<CarFullDescription car={car} />
					</div>
				</div>

				<div className="flex flex-col">
					<div className="text-my-black-500 flex items-start justify-between font-bold">
						<span className="text-xl">Car rental fee:</span>
						<div className="flex flex-col">
							<span className="font-normal">&#3647;{RENTAL_PRICE.toLocaleString()}</span>
							<span className="text-my-gray-100 font-normal text-base">
								{DAYS} days * {car.basePrice}&#3647;
							</span>
						</div>
					</div>
					<ol className="list-disc mt-2 list-inside">
						<li>Free cancel up to 24 hours</li>
						<li>Hijack insurance included</li>
						<li>฿7,000 Franchise</li>
						<li>Fuel Policy same as when pick-up</li>
					</ol>
					<ul className="mt-6 border-t border-dashed border-my-gray-200 pt-2 text-my-gray-100 font-light">
						<li className="flex items-center justify-between">
							<span>Car rental fee</span>
							<span>฿{RENTAL_PRICE.toLocaleString()}</span>
						</li>
						<li className="flex items-center justify-between">
							<span>Pick-up fee</span>
							<span>฿{PICK_UP_FEE.toLocaleString()}</span>
						</li>
						<li className="flex items-center justify-between">
							<span>Drop-off fee</span>
							<span>฿{DROP_OF_FEE.toLocaleString()}</span>
						</li>
						<li className="flex items-center justify-between">
							<span>Tax fee {(TAX_PERCNETAGE * 100).toFixed(0)}%</span>
							<span>฿{TAX.toLocaleString()}</span>
						</li>
						<li className="flex items-center justify-between">
							<span>Refundable deposit</span>
							<span>฿{DEPOSIT.toLocaleString()}</span>
						</li>
					</ul>
					<div className="flex font-bold items-center mt-2 justify-between">
						<span className="text-lg">Total</span>
						<span className="text-lg">฿{TOTAL_PRICE.toLocaleString()}</span>
					</div>
				</div>
			</Card>
		</>
	);
};
