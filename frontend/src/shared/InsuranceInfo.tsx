import { InfoCircleOutlined } from '@ant-design/icons';
import { ComparingTable } from '@components/InsuranceInfo/ComparingTable';
import { InsuranceDescription } from '@components/InsuranceInfo/InsuranceDescription';
import { InsuranceSwitch } from '@components/InsuranceInfo/InsuranceSwitch';
import { Alert } from 'antd';
import React from 'react';

interface InsuranceInfoProps {}

export const InsuranceInfo: React.FC<InsuranceInfoProps> = ({}) => {
	return (
		<>
			<div className="flex flex-col gap-4">
				<h2 className="font-medium">
					Insurance...{' '}
					<span className="font-medium text-[30px] text-my-blue">for peace of mind.</span>
				</h2>
				<Alert
					type="info"
					message={
						<span className="text-base">
							<span className="font-bold text-base">FREE CANCELLATION.</span> Full refund if you
							cancel this policy at any time before the rental period begins.
						</span>
					}
					icon={<InfoCircleOutlined />}
					showIcon
				/>
				<InsuranceDescription />
				<ComparingTable />
				<InsuranceSwitch />

				<Alert
					type="info"
					message={
						<span className="text-base">
							Neither Basic Protection nor Full Protection will cover personal possessions, cleaning
							charges, or flight / accommodation bookings.
						</span>
					}
				/>
				<Alert
					type="warning"
					icon={<InfoCircleOutlined />}
					showIcon
					message={
						<span className="text-base">
							<span className="font-bold text-base">Please note:</span> Your own car insurance is
							unlikely to cover hire cars.
						</span>
					}
				/>
			</div>
		</>
	);
};
