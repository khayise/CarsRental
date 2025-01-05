import React from 'react';
import { Button, ButtonProps, ConfigProvider } from 'antd';

interface SubmitButtonProps {
	children?: React.ReactNode;
	buttonProps?: ButtonProps;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ children, buttonProps }) => {
	return (
		<>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: '#155EEF',
					},
					components: {
						Button: {
							defaultActiveColor: '#155EEF',
							defaultBg: '#155EEF',
						},
					},
				}}>
				<Button {...buttonProps}>{children}</Button>
			</ConfigProvider>
		</>
	);
};
