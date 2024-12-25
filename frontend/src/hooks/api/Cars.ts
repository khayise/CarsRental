import axios from 'axios';
import { ICar } from '../../../types/ICar';
import { useQuery } from '@tanstack/react-query';

const staleTime = 1000 * 60 * 3;

export const useFetchCars = (): ICar[] | undefined => {
	const fetchCars = async () => {
		const { data } = await axios.get<ICar[]>('http://localhost:3000/cars');
		return data;
	};
	const { data } = useQuery({ queryKey: ['cars'], queryFn: fetchCars, staleTime });
	return data;
};
