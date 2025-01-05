import React from 'react';

import { Tabs } from 'antd';
import { Link } from 'react-router-dom';
import { CiCircleCheck } from 'react-icons/ci';

import { ClockCircleOutlined, CreditCardOutlined, IdcardOutlined } from '@ant-design/icons';

interface RentConditionsTabsProps {}

export const RentConditionsTabs: React.FC<RentConditionsTabsProps> = ({}) => {
	const items = [
		{
			key: '1',
			label: 'Be on time',
			children: (
				<div className="flex flex-col gap-2">
					<p className="text-base">
						According to rental company policies, you can only pick up the car keys at the
						designated pickup time. If you fail to collect the keys on time, staff often wait for a
						certain period, after which they may assign your car to another client.
					</p>
					<span className="text-base">Vehicle pickup time: 10:00 AM</span>
				</div>
			),
			icon: <ClockCircleOutlined />,
		},
		{
			key: '2',
			label: 'What to take',
			children: (
				<div className="flex flex-col gap-2">
					<span className="text-base">To pick up the car:</span>
					<ul className="ml-4 text-base">
						<li className="flex flex-row items-center gap-1 text-base">
							<CiCircleCheck className="flex-shrink-0 text-my-blue" size={20} />
							You must present your passport or a valid ID from your country.
						</li>
						<li className="flex flex-row items-center gap-1 text-base">
							<CiCircleCheck className="flex-shrink-0 text-my-blue" size={20} /> All drivers must
							provide their driver’s licenses.
						</li>
						<li className="flex flex-row items-center gap-1 text-base">
							<CiCircleCheck className="flex-shrink-0 text-my-blue" size={20} />
							The primary driver must present a credit card in their name, where the security
							deposit will be held.
						</li>
					</ul>
					<span className="mt-2 text-base">
						This is not a complete list. Please read the{' '}
						<Link
							className="text-base text-my-blue hover:text-my-blue hover:underline"
							to={'/contract'}>
							rental terms
						</Link>{' '}
						to ensure you have everything you need.
					</span>
				</div>
			),
			icon: <IdcardOutlined />,
		},
		{
			key: '3',
			label: 'Refundable deposit',
			children: (
				<div className="flex flex-col gap-2">
					<p className="text-base">
						You will need to leave a deposit, the amount of which is specified in the car’s details.
						The deposit is refunded when the car is returned at the end of the rental period.
					</p>
				</div>
			),
			icon: <CreditCardOutlined />,
		},
	];
	return (
		<>
			<div>
				<h3 className="font-medium">What you need to get a car</h3>
				<Tabs
					style={{ border: 'solid 1px #eee', padding: 16, borderRadius: 8 }}
					items={items}
					centered
					size="small"
					defaultActiveKey="1"
				/>
			</div>
		</>
	);
};
