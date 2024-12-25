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
			<div className="w-full gap-2 flex-col lg:flex-row flex mt-10">
				<FiltersBar>
					<DateRangePicker />
					<PickDropSelect label="Pick-up" name="pickDate" />
					<PickDropSelect label="Drop-off" name="dropDate" />
				</FiltersBar>
				<button
					onClick={() => navigateHandler('/cars/search')}
					className=" rounded-lg min-w-[150px] h-[66px] bg-my-blue">
					Search
				</button>
			</div>
		</>
	);
};
