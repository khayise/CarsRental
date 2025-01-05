import { CheckCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import React from 'react';

interface DisadvantageProps {
	data: {
		text: string;
		partialRefund?: boolean;
		isPrice?: boolean;
	};
}

export const Disadvantage: React.FC<DisadvantageProps> = ({ data }) => {
	if (data.isPrice)
		return (
			<>
				<div className="flex flex-col items-center">
					<span className="font-medium text-base text-center">No cover price</span>
					<span className="font-bold text-lg">฿0</span>
				</div>
			</>
		);
	return (
		<>
			<div className="flex flex-col items-center gap-2">
				{data.partialRefund ? (
					<CheckCircleOutlined style={{ fontSize: '48px', color: 'var(--my-blue)' }} />
				) : (
					<CloseOutlined className="text-red-500" />
				)}
				<span className="text-base text-center">{data.text}</span>
				<Tag>No refund</Tag>
			</div>
		</>
	);
};
