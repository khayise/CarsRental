import React, { useEffect, useState } from 'react';
import { useFetchCars } from '../../hooks/api/Cars';
import { CarListItem } from './CarListItem';
import { sortCars } from '../../functions/filters';
import { useSortStore } from '../../store/sortStore';
import { useSearchParamsStore } from '../../store/searchParamsStore';
import { CarListEmpty } from './CarListEmpty';
import { CarListItemSkeleton } from './CarListItemSkeleton';
import { AnimatePresence } from 'framer-motion';

interface CarListProps {}

export const CarList: React.FC<CarListProps> = ({}) => {
	const [sorted, setSorted] = useState<ICar[]>([]);
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const { data: cars, refetch, isFetching } = useFetchCars();
	const { searchParams } = useSearchParamsStore();

	const { filterDirection } = useSortStore();

	useEffect(() => {
		if (cars) {
			sortCars(cars, setSorted, filterDirection);
		}
	}, [cars, filterDirection]);

	useEffect(() => {
		if (!isMounted) {
			setIsMounted(true);
			return;
		}
		refetch();
	}, [searchParams]);

	// if (isFetching && cars?.length) return <Spinner />;
	if (!cars?.length && !isFetching) return <CarListEmpty />;

	return (
		<>
			<ul className="flex flex-col gap-6">
				<AnimatePresence mode="wait">
					{!isFetching
						? sorted?.map((car) => <CarListItem key={car._id} car={car} />)
						: new Array(6).fill(null).map((_, index) => <CarListItemSkeleton key={index} />)}
				</AnimatePresence>
			</ul>
		</>
	);
};
