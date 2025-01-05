import React from 'react';

interface FilterFormItemProps {
	label: string;
	filterComponent: React.ReactNode;
}

export const FilterFormItem: React.FC<FilterFormItemProps> = ({ label, filterComponent }) => {
	return (
		<>
			<div className="relative flex flex-col w-full">
				<label htmlFor="" className="text-my-gray-200 text-sm">
					{label}
				</label>
				{filterComponent}
				<hr className="mt-1" />
			</div>
		</>
	);
};
