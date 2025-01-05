import { create } from 'zustand';

type Store = {
	pickLocation: string;
	dropLocation: string;

	setPickLocation: (location: string) => void;
	setDropLocation: (location: string) => void;
};

export const usePickDropLocationStore = create<Store>()((set) => ({
	pickLocation: 'Phuket',
	dropLocation: 'Phuket',

	setPickLocation: (location: string) => set(() => ({ pickLocation: location })),
	setDropLocation: (location: string) => set(() => ({ dropLocation: location })),
}));
