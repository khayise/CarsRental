import React from 'react';

import { Table } from 'antd';
import { Advantage } from './Advantage';
import { Disadvantage } from './Disadvantage';
import { Situation } from './Situation';
import { InsuranceSwitch } from './InsuranceSwitch';

interface ComparingTableProps {}

const columns = [
	{
		title: <span className="font-bold">What is included in the coverage</span>,
		dataIndex: 'situation',
		key: 'situation',
		render: (data: { text: string; extraText?: string; isPrice?: boolean }) => (
			<Situation data={data} />
		),
	},
	{
		title: <span className="font-bold">Basic coverage</span>,
		dataIndex: 'basicCoverage',
		key: 'basicCoverage',
		responsive: ['sm'],
		render: (data: { text: string; isPartial?: boolean }) => <Disadvantage data={data} />,
	},
	{
		title: <span className="font-bold text-my-blue">Full coverage</span>,
		dataIndex: 'fullCoverage',
		key: 'fullCoverage',
		render: (data: { text: string; isPrice?: boolean }) => <Advantage data={data} />,
	},
];

const dataSource = [
	{
		key: '1',
		situation: { text: 'Theft of the vehicle.' },
		basicCoverage: { text: 'You pay up to ฿7,000 (your deposit).', isPartial: true },
		fullCoverage: { text: 'Refund for anything you pay' },
	},
	{
		key: '2',
		situation: { text: 'Bodywork damage' },
		basicCoverage: { text: 'You pay up to ฿7,000 (your deposit).', isPartial: true },
		fullCoverage: { text: 'Refund for anything you pay' },
	},
	{
		key: '3',
		situation: {
			text: 'Any other damage',
			extraText: 'The car’s interior, tyres, windows, engine, etc.',
		},
		basicCoverage: { text: 'You pay the full cost', isPartial: false },
		fullCoverage: { text: 'Refund for anything you pay' },
	},
	{
		key: '4',
		situation: {
			text: 'Any other charges',
			extraText:
				'Charges for towing, lost keys, rental company’s lost profits while the car’s being repaired, etc.',
		},
		basicCoverage: { text: 'You pay the full cost', isPartial: false },
		fullCoverage: { text: 'Refund for anything you pay' },
	},
	{
		key: '5',
		situation: {
			text: '',
		},
		basicCoverage: { text: '', isPartial: false, isPrice: true },
		fullCoverage: { text: '', isPrice: true },
	},
];

export const ComparingTable: React.FC<ComparingTableProps> = ({}) => {
	return (
		<>
			<h3 className="font-medium text-lg">Compare your coverage</h3>

			<Table
				rowHoverable={false}
				tableLayout="auto"
				bordered
				pagination={false}
				dataSource={dataSource}
				columns={columns}
			/>
		</>
	);
};
