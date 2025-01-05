import { create } from 'zustand';

type Store = {
	insuranceDayPrice: number;
	insuranceTotalPrice: number;
	isInsured: boolean;

	setInsuranceTotalPrice: (price: number) => void;
	setIsInsured: (isInsured: boolean) => void;
};

export const useInsuranceStore = create<Store>()((set) => ({
	insuranceDayPrice: 270,
	insuranceTotalPrice: 0,
	isInsured: false,

	setInsuranceTotalPrice: (price: number) => set(() => ({ insuranceTotalPrice: price })),
	setIsInsured: (isInsured: boolean) => set(() => ({ isInsured: isInsured })),
}));
