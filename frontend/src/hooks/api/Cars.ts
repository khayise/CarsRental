import axios from 'axios';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useSearchParamsStore } from '../../store/searchParamsStore';

const staleTime = 1000 * 60 * 3;

export const useFetchCars = (): UseQueryResult<ICar[], Error> => {
	const { searchParams } = useSearchParamsStore();
	const fetchCars = async () => {
		console.log('fetching cars');
		const { data } = await axios.get<ICar[]>(
			`${import.meta.env.VITE_BASE_URL}/cars?${searchParams}`,
		);
		return data;
	};
	const data = useQuery({ queryKey: ['cars'], queryFn: fetchCars, staleTime });

	return data;
};
