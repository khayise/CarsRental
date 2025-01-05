import React from 'react';
import { FaMapLocationDot as LocationIcon } from 'react-icons/fa6';
import { Select } from '../Filters/Select/Select';

interface PickDropSelectProps {
	name: 'pickUpLocation' | 'dropOffLocation';
	label: string;
}

export const PickDropSelect: React.FC<PickDropSelectProps> = ({ name, label }) => {
	return (
		<>
			<div className="flex flex-col flex-1 gap-1">
				<div className="flex items-center gap-1">
					<label htmlFor="dateFromSelect" className="label">
						{label}
					</label>
					<LocationIcon size={16} className="text-my-black-500" />
				</div>
				<Select name={name} />
			</div>
		</>
	);
};
