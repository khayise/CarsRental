import React, { useEffect, useRef } from 'react';

import { motion } from 'framer-motion';
import { DateRange } from 'react-date-range';
import { ISelectionRange } from '../../../types/ISelectionRange';
import { useDateRangeStore } from '../../../store/dateRangeStore';

interface CustomDateRangeProps {
	setIsOpen: React.Dispatch<boolean>;
	buttonRefCurrent: HTMLButtonElement | null;
}

export const CustomDateRange: React.FC<CustomDateRangeProps> = ({
	setIsOpen,
	buttonRefCurrent,
}) => {
	const { startDate, endDate, setDateRange } = useDateRangeStore();
	const containerRef = useRef<HTMLDivElement>(null);

	const handleSelect = (changes: any) => {
		setDateRange(changes);
	};

	const selectionRange: ISelectionRange = {
		startDate,
		endDate,
		key: 'selection',
	};

	useEffect(() => {
		const handleClose = (e: MouseEvent) => {
			const containerCondition = containerRef && !containerRef.current?.contains(e.target as Node);
			const buttonCondition = buttonRefCurrent && !buttonRefCurrent?.contains(e.target as Node);
			if (containerCondition && buttonCondition) {
				setIsOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClose);

		return () => document.removeEventListener('mousedown', handleClose);
	}, []);

	return (
		<>
			<motion.div
				ref={containerRef}
				className="top-full -left-[8px] lg:left-0 z-10 absolute shadow-md"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.1 }}>
				<DateRange
					className="shadow-lg rounded-b-lg"
					rangeColors={['#155EEF']}
					minDate={new Date()}
					showDateDisplay={false}
					onChange={handleSelect}
					ranges={[selectionRange]}
				/>
			</motion.div>
		</>
	);
};
