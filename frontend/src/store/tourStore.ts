import { create } from 'zustand';

type Store = {
	isTourOpen: boolean;

	setIsTourOpen: (isTourOpen: boolean) => void;
};

export const useTourStore = create<Store>()((set) => ({
	isTourOpen: false,

	setIsTourOpen: (isTourOpen: boolean) => set(() => ({ isTourOpen: isTourOpen })),
}));
