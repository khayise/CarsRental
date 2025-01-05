import React from 'react';

import { Alert } from 'antd';
import { FaCheckCircle } from 'react-icons/fa';

interface FreeCancelationAlertProps {}

export const FreeCancelationAlert: React.FC<FreeCancelationAlertProps> = ({}) => {
	return (
		<>
			<Alert
				type="success"
				showIcon
				icon={<FaCheckCircle />}
				message={<span className="text-base">Free cancelation up to 24 hours</span>}
			/>
		</>
	);
};
