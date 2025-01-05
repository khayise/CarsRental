import { create } from 'zustand';
import { ISelectionRange } from '../types/ISelectionRange';

type Store = {
	startDate: Date;
	endDate: Date;
	setDateRange: (changes: { selection: ISelectionRange }) => void;
};

function generateDropOffDate() {
	const defaultEndDate = new Date();
	const PLUS_DAYS = 2;
	defaultEndDate.setDate(defaultEndDate.getDate() + PLUS_DAYS);
	return defaultEndDate as Date;
}

const startDate = new Date();
const endDate = generateDropOffDate();

export const useDateRangeStore = create<Store>()((set) => ({
	startDate,
	endDate,
	setDateRange: (changes) =>
		set((state) => ({
			...state,
			startDate: changes.selection.startDate,
			endDate: changes.selection.endDate,
		})),
}));
