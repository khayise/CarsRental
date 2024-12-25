import React, { useRef, useState } from 'react';
import { CustomDateRange } from './CustomDateRange';
import { AnimatePresence } from 'framer-motion';
import useDateRangeStore from '../../../../store/dateRangeStore';

interface FilterDateRangeProps {}

export const FilterDateRange: React.FC<FilterDateRangeProps> = ({}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const buttonRef = useRef<HTMLButtonElement | null>(null);

	const handleClick = () => setIsOpen(!isOpen);

	const { startDate, endDate } = useDateRangeStore();

	return (
		<>
			<div className="relative flex flex-col gap-1">
				<label htmlFor="" className="label">
					Date
				</label>
				<button className="w-full text-start" onClick={handleClick} ref={buttonRef}>
					{startDate.getDate()}.{startDate.getMonth() + 1}.{startDate.getFullYear()} -{' '}
					{endDate.getDate()}.{endDate.getMonth() + 1}.{endDate.getFullYear()}
				</button>
				<AnimatePresence>
					{isOpen && <CustomDateRange buttonRefCurrent={buttonRef.current} setIsOpen={setIsOpen} />}
				</AnimatePresence>
			</div>
		</>
	);
};
