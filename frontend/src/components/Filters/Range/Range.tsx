import React from 'react';
import { InputMinPrice } from '../Inputs-Price/InputMinPrice';
import { InputMaxPrice } from '../Inputs-Price/InputMaxPrice';
import { RangeSlider } from './RangeSlider';

interface RangeProps {}

export const Range: React.FC<RangeProps> = ({}) => {
	return (
		<>
			<div className="flex flex-col gap-2">
				<div className="flex justify-between">
					<div className="flex items-center gap-1">
						<span className="text-my-gray-200 text-sm">min:</span>
						<InputMinPrice />
					</div>
					<div className="flex justify-end items-center gap-1 w-full">
						<span className="text-my-gray-200 text-sm">max:</span>
						<InputMaxPrice />
					</div>
				</div>
				<RangeSlider />
			</div>
		</>
	);
};
