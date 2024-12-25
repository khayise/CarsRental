import React, { useEffect, useRef, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { CustomDateRange } from './CustomDateRange';
import useDateRangeStore from '../../../../store/dateRangeStore';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

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

	return (
		<>
			<div className="relative flex-1 justify-between flex flex-col">
				<label htmlFor="date_picker" className="label">
					Date
				</label>
				<button
					ref={buttonRef}
					onClick={handleClick}
					className="text-my-gray-200 flex gap-2 justify-start font-light">
					<span>
						Pick-up:
						{` ${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}`}
					</span>
					<span>
						Drop-off: {`${endDate.getDate()}/${endDate.getMonth() + 1}/${endDate.getFullYear()}`}
					</span>
				</button>
				<AnimatePresence>
					{isOpen && <CustomDateRange buttonRefCurrent={buttonRef.current} setIsOpen={setIsOpen} />}
				</AnimatePresence>
			</div>
		</>
	);
};
