import React from 'react';

// import { CarFullDescription } from '../../shared/CarFullDescription';
import { Card } from '../../shared/Card';
import { useDateRangeStore } from '../../store/dateRangeStore';
import { useInsuranceStore } from 'src/store/insuranceStore';

interface PriceCardProps {
	car: ICar;
}

export const PriceCard: React.FC<PriceCardProps> = ({ car }) => {
	const { startDate, endDate } = useDateRangeStore();
	const { isInsured, insuranceTotalPrice } = useInsuranceStore();

	const DAYS = (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24) + 1;
	const DEPOSIT = 7000;
	const PICK_UP_FEE = 600;
	const DROP_OF_FEE = 600;
	const RENTAL_PRICE = DAYS * car.basePrice;
	const TAX_PERCENTAGE = 0.07;
	const TAX = Math.floor((RENTAL_PRICE + PICK_UP_FEE + DROP_OF_FEE) * TAX_PERCENTAGE);
	const TOTAL_PRICE =
		(isInsured ? insuranceTotalPrice : 0) +
		DEPOSIT +
		RENTAL_PRICE +
		PICK_UP_FEE +
		DROP_OF_FEE +
		TAX;

	return (
		<>
			<Card className="flex flex-col flex-grow lg:flex-grow-0 gap-6 w-full lg:w-auto h-auto self-start">
				{/* <div className="flex gap-4">
					<img className="w-[200px] h-[100px]" src={car?.img} alt="" />
					<div className="flex flex-col gap-2">
						<h3 className="font-medium">{car?.name}</h3>
						<CarFullDescription car={car} />
					</div>
				</div> */}

				<div className="flex flex-col">
					<div className="flex justify-between items-start font-bold text-my-black-500">
						<span className="text-xl">Car rental fee:</span>
						<div className="flex flex-col">
							<span className="font-normal">&#3647;{RENTAL_PRICE.toLocaleString()}</span>
							<span className="font-normal text-base text-my-gray-100">
								{DAYS} days * {car.basePrice}&#3647;
							</span>
						</div>
					</div>
					<ol className="mt-2 list-disc list-inside">
						<li>Free cancel up to 24 hours</li>
						<li>Hijack insurance included</li>
						<li>฿7,000 Franchise</li>
						<li>Fuel Policy same as when pick-up</li>
					</ol>
					<ul className="border-my-gray-200 mt-6 pt-2 border-t border-dashed font-light text-my-gray-100">
						<li className="flex justify-between items-center">
							<span>Car rental fee</span>
							<span>฿{RENTAL_PRICE.toLocaleString()}</span>
						</li>
						<li className="flex justify-between items-center">
							<span>Pick-up fee</span>
							<span>฿{PICK_UP_FEE.toLocaleString()}</span>
						</li>
						<li className="flex justify-between items-center">
							<span>Drop-off fee</span>
							<span>฿{DROP_OF_FEE.toLocaleString()}</span>
						</li>
						<li className="flex justify-between items-center">
							<span>Tax fee {(TAX_PERCENTAGE * 100).toFixed(0)}%</span>
							<span>฿{TAX.toLocaleString()}</span>
						</li>
						<li className="flex justify-between items-center">
							<span>Refundable deposit</span>
							<span>฿{DEPOSIT.toLocaleString()}</span>
						</li>
						{isInsured && (
							<li className="flex justify-between items-center">
								<span className="text-my-blue">Insurance</span>
								<span className="text-my-blue">฿{insuranceTotalPrice.toLocaleString()}</span>
							</li>
						)}
					</ul>
					<div className="flex justify-between items-center mt-2 font-bold">
						<span className="text-lg">Total</span>
						<span className="text-lg">฿{TOTAL_PRICE.toLocaleString()}</span>
					</div>
				</div>
			</Card>
		</>
	);
};
