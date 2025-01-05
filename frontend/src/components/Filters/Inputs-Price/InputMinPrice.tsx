import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { usePriceRangeStore } from 'src/store/priceRangeStore';

interface InputMinPriceProps {}

export const InputMinPrice: React.FC<InputMinPriceProps> = ({}) => {
	const { maxPrice, minPrice, setMinPrice } = usePriceRangeStore();

	const { register, setValue } = useFormContext();

	const onChangeMin = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMinPrice(+e.target.value);
	};

	const onBlurMin = () => {
		if (minPrice > maxPrice) {
			setMinPrice(maxPrice);
		}
	};

	useEffect(() => {
		setValue('minPrice', minPrice);
	}, [minPrice]);
	return (
		<>
			<input
				autoComplete="off"
				{...register('minPrice', {
					value: minPrice,
					onChange: onChangeMin,
					required: true,
					onBlur: onBlurMin,
				})}
				className="border-my-gray-light px-1 border rounded-sm w-1/2"
				type="number"
			/>
		</>
	);
};
