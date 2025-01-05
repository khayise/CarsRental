import { create } from 'zustand';

type Store = {
	minPrice: number;
	maxPrice: number;

	setMinPrice: (price: number) => void;
	setMaxPrice: (price: number) => void;
};

export const usePriceRangeStore = create<Store>()((set) => ({
	minPrice: 0,
	maxPrice: 0,

	setMinPrice: (price) => set(() => ({ minPrice: price })),
	setMaxPrice: (price) => set(() => ({ maxPrice: price })),
}));
