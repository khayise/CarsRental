import React from 'react';

interface SituationProps {
	data: {
		text: string;
		extraText?: string;
	};
}

export const Situation: React.FC<SituationProps> = ({ data }) => {
	return (
		<>
			<div className="flex flex-col gap-2">
				<span className="font-medium">{data.text}</span>
				{data.extraText && <span className="text-sm">{data.extraText}</span>}
			</div>
		</>
	);
};
