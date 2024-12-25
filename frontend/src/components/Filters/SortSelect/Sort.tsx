import React from 'react';
import { SortSelect } from './SortSelect';
import { BiSortAlt2 as SortIcon } from 'react-icons/bi';

interface SortProps {}

export const Sort: React.FC<SortProps> = ({}) => {
	return (
		<>
			<div className="justify-self-end flex flex-col ">
				<div className="flex gap-1 items-center">
					<label className="text-my-black-500" htmlFor="">
						Sort by
					</label>
					<SortIcon />
				</div>

				<SortSelect />
			</div>
		</>
	);
};
