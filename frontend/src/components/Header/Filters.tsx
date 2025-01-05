import React from 'react';
import { FiltersBar } from './FiltersBar';
import { PickDropSelect } from './PickDropSelect';
import { DateRangePicker } from '../Filters/DateRangePicker/DateRangePicker';
import { useNavigateHandler } from '../../hooks/useNagivateHandler';

interface FiltersProps {}

export const Filters: React.FC<FiltersProps> = ({}) => {
	const navigateHandler = useNavigateHandler();

	return (
		<>
			<div className="flex lg:flex-row flex-col gap-2 mt-10 w-full">
				<FiltersBar>
					<DateRangePicker />
					<PickDropSelect label="Pick-up" name="pickUpLocation" />
					<PickDropSelect label="Drop-off" name="dropOffLocation" />
				</FiltersBar>
				<button
					onClick={() => navigateHandler('/cars/search')}
					className="bg-my-blue rounded-lg min-w-[150px] h-[71px]">
					Search
				</button>
			</div>
		</>
	);
};
