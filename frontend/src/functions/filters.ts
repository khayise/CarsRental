import { ICar } from '../types/ICar';
import { TSortDirections } from '../types/TSortDirections';

export function sortCars(
	data: ICar[],
	set: React.Dispatch<React.SetStateAction<ICar[]>>,
	direction: TSortDirections,
): void {
	if (data) {
		let sorted: ICar[] = [...data].sort((a, b) => {
			if (direction === 'asc') return a.basePrice - b.basePrice;
			if (direction === 'desc') return b.basePrice - a.basePrice;

			return 0;
		});
		console.log(data);
		set(sorted);
	}
}
