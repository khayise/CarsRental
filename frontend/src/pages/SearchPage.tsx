import React, { useState } from 'react';
import { Card } from '../shared/Card';
import { CarList } from '../components/CarList/CarList';
import { Sort } from '../components/Filters/SortSelect/Sort';
import { IoFilterSharp as FilterIcon } from 'react-icons/io5';
import { FilterForm } from '../components/Filters/FilterForm/FilterForm';
import { FilterFormModal } from '../components/Filters/FilterForm/FilterFormModal';
import { AnimatePresence } from 'framer-motion';

interface SearchPageProps {}

export const SearchPage: React.FC<SearchPageProps> = ({}) => {
	const [isModalFiltersOpen, setIsModalFiltersOpen] = useState<boolean>(false);

	const handleFiltersClick = () => {
		setIsModalFiltersOpen(true);
	};

	return (
		<>
			<div className="mx-auto w-full max-w-[1280px]">
				<div className="gap-6 grid grid-cols-4 mx-6 pt-10">
					<div className="flex justify-between items-start col-span-full">
						<button onClick={handleFiltersClick} className="flex items-center gap-1 xl:invisible">
							<span>Filters</span> <FilterIcon size={18} className="text-my-black-500" />
						</button>
						<Sort />
					</div>
					{/* <span className="col-span-full xl:col-start-2">{cars?.length} results</span> */}
					<Card className={`w-[300px] hidden xl:flex self-start h-auto flex-col gap-4`}>
						<FilterForm />
					</Card>
					<div className="flex-col place-content-center col-span-full xl:col-span-3">
						<CarList />
					</div>
				</div>
			</div>
			<AnimatePresence mode="wait">
				{isModalFiltersOpen && <FilterFormModal setIsOpen={setIsModalFiltersOpen} />}
			</AnimatePresence>
		</>
	);
};
