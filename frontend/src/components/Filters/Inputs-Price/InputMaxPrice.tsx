import { useFetchMaxPrice } from '@api/MaxPrice';
import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { usePriceRangeStore } from 'src/store/priceRangeStore';

interface InputMaxPriceProps {}

export const InputMaxPrice: React.FC<InputMaxPriceProps> = ({}) => {
	const { maxPrice, minPrice, setMaxPrice } = usePriceRangeStore();
	const { register, setValue } = useFormContext();
	const { data: maxPossiblePrice } = useFetchMaxPrice();

	const onChangeMax = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMaxPrice(+e.target.value);
	};

	const validateMax = (value: number): boolean => {
		if (maxPossiblePrice) {
			return value <= maxPossiblePrice;
		}
		return true;
	};

	const onBlurMax = () => {
		if (maxPossiblePrice && maxPrice > maxPossiblePrice) {
			setMaxPrice(maxPossiblePrice);
		}
		if (maxPrice < minPrice) {
			setMaxPrice(minPrice);
		}
	};

	useEffect(() => {
		if (maxPrice === 0 && maxPossiblePrice) {
			setMaxPrice(maxPossiblePrice);
		}
		setValue('maxPrice', maxPrice);
	}, [maxPrice, maxPossiblePrice, setValue]);

	return (
		<>
			<input
				autoComplete="off"
				{...register('maxPrice', {
					value: maxPrice,
					onChange: onChangeMax,
					required: true,
					validate: validateMax,
					onBlur: onBlurMax,
				})}
				className="border-my-gray-light px-1 border rounded-sm w-1/2"
				type="number"
			/>
		</>
	);
};
