import React, { useEffect, useRef, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { CustomDateRange } from './CustomDateRange';
import { FaCalendarAlt as CalendarIcon } from 'react-icons/fa';

import { useDateRangeStore } from '../../../store/dateRangeStore';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { formatDate } from '../../../functions/formatDate';

interface DateRangePickerProps {}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({}) => {
	const { startDate, endDate } = useDateRangeStore();
	const [isOpen, setIsOpen] = useState<boolean>(true);

	const buttonRef = useRef<HTMLButtonElement | null>(null);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if (startDate !== endDate) {
			setIsOpen(false);
		}
	}, [startDate, endDate]);

	const startDateString = formatDate(startDate);
	const endDateString = formatDate(endDate);

	return (
		<>
			<div className="relative flex flex-col flex-1 justify-between">
				<div className="flex items-center gap-1">
					<label htmlFor="date_picker" className="label">
						Date
					</label>
					<CalendarIcon size={16} className="text-my-black-500" />
				</div>

				<button
					ref={buttonRef}
					onClick={handleClick}
					className="flex justify-start gap-2 font-light text-my-gray-200">
					<span>
						Pick-up:
						{startDateString}
					</span>
					<span>Drop-off: {endDateString}</span>
				</button>
				<AnimatePresence>
					{isOpen && <CustomDateRange buttonRefCurrent={buttonRef.current} setIsOpen={setIsOpen} />}
				</AnimatePresence>
			</div>
		</>
	);
};
