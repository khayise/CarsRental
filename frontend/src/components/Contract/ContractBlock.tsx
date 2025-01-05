import React from 'react';

interface Props {
	contractBlock: IContractBlock;
	outerIndex: number;
}

export const ContractBlock: React.FC<Props> = ({ contractBlock, outerIndex }) => {
	const { title, terms } = contractBlock;
	return (
		<>
			<div className="flex flex-col gap-4">
				<h3>{title}</h3>
				<ul className="flex flex-col gap-2 text-base">
					{terms.map((term, index) => (
						<li key={index}>
							{outerIndex + 1}.{index + 1}. {term}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};
