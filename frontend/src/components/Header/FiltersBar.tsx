import React from 'react';

interface FiltersBarProps {
	children: React.ReactNode;
}

export const FiltersBar: React.FC<FiltersBarProps> = ({ children }) => {
	return (
		<>
			<div className="flex-grow flex-col lg:flex-row flex gap-4 rounded-lg p-2 bg-white">
				{children}
			</div>
		</>
	);
};
