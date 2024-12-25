import React, { useState } from 'react';
import { PickDropSelect } from '../components/Header/PickDropSelect';
import { Card } from '../shared/Card';
import { CarList } from '../components/CarList/CarList';
import { Sort } from '../components/Filters/SortSelect/Sort';
import { Range } from '../components/Filters/Range/Range';
import { FilterDateRange } from '../components/Filters/DateRangePicker/FilterDateRange';

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
	const [isFiltersOpen, setIsFiltersOpen] = useState<boolean>(false);

	return (
		<>
			<div className="mx-auto w-full max-w-[1280px]">
				<div className="container grid grid-cols-4 gap-6 pt-10">
					<div className="col-span-full flex items-start justify-between mr-12">
						<button className="flex xl:invisible">Filters</button>
						<Sort />
					</div>
					<Card className={`w-[300px] hidden xl:flex self-start h-auto flex-col gap-2`}>
						<FilterDateRange />
						<PickDropSelect label="Pick-up" name="pickDate" />
						<PickDropSelect label="Drop-off" name="dropDate" />
						<Range />
					</Card>
					<div className="mr-12 place-content-center flex-col col-span-full xl:col-span-3 ">
						<CarList />
					</div>
				</div>
			</div>
		</>
	);
};
