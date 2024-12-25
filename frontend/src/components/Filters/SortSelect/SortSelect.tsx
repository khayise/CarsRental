import React, { ChangeEvent } from 'react';
import useSortStore from '../../../../store/sortStore';
import { TSortDirections } from '../../../../types/TSortDirections';

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
				className="text-my-gray-200 bg-transparent font-light text-base"
				name="sortBy"
				id="sortBy">
				<option value="asc">Low to high</option>
				<option value="desc">High to low</option>
			</select>
		</>
	);
};
