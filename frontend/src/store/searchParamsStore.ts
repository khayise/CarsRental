import { create } from 'zustand';

type Store = {
	searchParams: string;
	setSearchParams: (searchParams: string) => void;
};

export const useSearchParamsStore = create<Store>()((set) => ({
	searchParams: '',
	setSearchParams: (searchParams) => set(() => ({ searchParams: searchParams })),
}));
