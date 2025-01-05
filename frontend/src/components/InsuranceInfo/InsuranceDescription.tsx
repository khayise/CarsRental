import React from 'react';

interface InsuranceDescriptionProps {}

export const InsuranceDescription: React.FC<InsuranceDescriptionProps> = ({}) => {
	return (
		<>
			<p className="text-base">
				When picking up the car, the rental company staff will block the deposit amount on your
				credit card. You may lose the deposit if the vehicle is damaged or stolen, but if you have
				Full Coverage, insurance will reimburse you. The cost of the coverage you see includes all
				applicable taxes and fees.
			</p>
		</>
	);
};
