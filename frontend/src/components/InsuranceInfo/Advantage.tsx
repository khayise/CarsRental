import React from 'react';
import { CheckCircleFilled } from '@ant-design/icons';
import { Tag } from 'antd';
import { useInsuranceStore } from 'src/store/insuranceStore';

interface AdvantageProps {
	data: {
		text: string;
		isPrice?: boolean;
	};
}

export const Advantage: React.FC<AdvantageProps> = ({ data }) => {
	const { insuranceTotalPrice } = useInsuranceStore();
	if (data.isPrice)
		return (
			<>
				<div className="flex flex-col items-center">
					<span className="font-medium text-base text-center">Total cover price</span>
					<span className="font-bold text-lg text-my-blue">฿{insuranceTotalPrice}</span>
				</div>
			</>
		);
	return (
		<>
			<div className="flex flex-col items-center gap-2">
				<CheckCircleFilled style={{ fontSize: '24px', color: 'var(--my-blue)' }} />
				<span className="font-medium text-base text-center">{data.text}</span>
				<Tag color="success">Full refund</Tag>
			</div>
		</>
	);
};
