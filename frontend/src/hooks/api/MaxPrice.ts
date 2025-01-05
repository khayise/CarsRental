import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const staleTime = 1000 * 60 * 3;

export function useFetchMaxPrice() {
	async function fetchMaxPrice() {
		try {
			console.log('fetchingMaxPrice', `${import.meta.env.VITE_BASE_URL}/maxPrice`);
			const { data } = await axios.get<number>(`${import.meta.env.VITE_BASE_URL}/maxPrice`);
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	const data = useQuery({ queryKey: ['maxPrice'], queryFn: fetchMaxPrice, staleTime });
	return data;
}
