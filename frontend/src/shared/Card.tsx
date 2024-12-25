import React from 'react';

interface CardProps {
	children?: React.ReactNode;
	className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
	return (
		<>
			<div className={`${className ? className : ''} p-4 bg-white rounded-lg`}>{children}</div>
		</>
	);
};
