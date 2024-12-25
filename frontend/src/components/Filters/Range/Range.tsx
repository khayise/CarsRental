import React, { useEffect, useState } from 'react';
import { useFetchCars } from '../../../hooks/api/Cars';

interface RangeProps {}

export const Range: React.FC<RangeProps> = ({}) => {
	const cars = useFetchCars();
	const [minPrice, setMinPrice] = useState<number>(0);
	const [maxPrice, setMaxPrice] = useState<number>(0);

	useEffect(() => {
		if (cars) {
			setMinPrice(cars[0].basePrice);
			setMaxPrice(cars.slice(-1)[0].basePrice);
		}
	}, [cars]);
	return (
		<>
			<div className="flex flex-col gap-2 ">
				<label htmlFor="" className="label">
					Price
				</label>
				<input min={minPrice} max={maxPrice} className="" name="priceRange" type="" />
			</div>
		</>
	);
};
