import { create } from 'zustand';
import { TSortDirections } from '../types/TSortDirections';

type Store = {
	filterDirection: TSortDirections;
	set: (direction: TSortDirections) => void;
};

export const useSortStore = create<Store>()((set) => ({
	filterDirection: 'asc',
	set: (direction) => set(() => ({ filterDirection: direction })),
}));
