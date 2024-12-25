import React from 'react';

interface CardDescriptionProps {
	icon?: string;
	text?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({ icon, text }) => {
	return (
		<div className="flex text-sm font-light text-my-gray-100 items-center gap-1">
			{icon && <img src={icon} alt="Icon" />}
			<span className="">{text}</span>
		</div>
	);
};
