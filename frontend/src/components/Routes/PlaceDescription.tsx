import React from 'react';

interface PlaceDescriptionProps {
	title: string;
	place: string;
}

export const PlaceDescription: React.FC<PlaceDescriptionProps> = ({ title, place }) => {
	return (
		<>
			<div className="flex flex-col">
				{title && <span className="font-semibold text-md">{title}</span>}
				{place && <span className="text-md italic">{place}</span>}
			</div>
		</>
	);
};
