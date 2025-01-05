import React, { ChangeEvent } from 'react';

import { TSortDirections } from '../../../types/TSortDirections';
import { useSortStore } from '../../../store/sortStore';

interface SortSelectProps {}

export const SortSelect: React.FC<SortSelectProps> = ({}) => {
	const { set } = useSortStore();

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		set(e.target.value as TSortDirections);
	};
	return (
		<>
			<select
				onChange={(e) => handleChange(e)}
				className="bg-transparent font-light text-base text-my-gray-200"
				name="sortBy"
				id="sortBy">
				<option value="asc">Low to high</option>
				<option value="desc">High to low</option>
			</select>
		</>
	);
};
