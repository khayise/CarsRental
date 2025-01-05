import React from 'react';
import { SortSelect } from './SortSelect';
import { BiSortAlt2 as SortIcon } from 'react-icons/bi';

interface SortProps {}

export const Sort: React.FC<SortProps> = ({}) => {
	return (
		<>
			<div className="flex flex-col justify-self-end">
				<div className="flex items-center gap-1">
					<label className="text-my-black-500" htmlFor="">
						Sort
					</label>
					<SortIcon className="text-my-black-500" size={20} />
				</div>

				<SortSelect />
			</div>
		</>
	);
};
