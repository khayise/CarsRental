import React, { useEffect, useRef, useState } from 'react';
import { CustomDateRange } from './CustomDateRange';
import { AnimatePresence } from 'framer-motion';
import { formatDate } from '../../../functions/formatDate';
import { UseFormRegister } from 'react-hook-form';
import { useDateRangeStore } from '../../../store/dateRangeStore';

interface FilterDateRangeProps {
	register: UseFormRegister<any>;
}

export const FilterDateRange: React.FC<FilterDateRangeProps> = ({ register }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const buttonRef = useRef<HTMLButtonElement | null>(null);

	const handleClick = () => setIsOpen(!isOpen);

	const { startDate, endDate } = useDateRangeStore();

	useEffect(() => {
		if (startDate !== endDate) {
			setIsOpen(false);
		}
	}, [startDate, endDate]);

	const startDateString = formatDate(startDate);
	const endDateString = formatDate(endDate);

	return (
		<>
			<button type="button" className="w-full text-start" onClick={handleClick} ref={buttonRef}>
				{startDateString} - {endDateString}
			</button>
			<AnimatePresence>
				{isOpen && <CustomDateRange buttonRefCurrent={buttonRef.current} setIsOpen={setIsOpen} />}
			</AnimatePresence>

			<input
				type="hidden"
				{...register('startDate', { valueAsDate: true })}
				value={startDate.toISOString().substring(0, 10)}
			/>
			<input
				type="hidden"
				{...register('endDate', { valueAsDate: true })}
				value={startDate.toISOString().substring(0, 10)}
			/>
		</>
	);
};
