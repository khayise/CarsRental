import { Input } from 'antd';
import React from 'react';
import { Control, Controller, FieldError } from 'react-hook-form';

interface ControlledInputProps {
	control: Control<IOrderForm, any>;
	name: keyof IOrderForm;
	placeholder: string;
	error: FieldError | undefined;
}

export const ControlledInput: React.FC<ControlledInputProps> = ({
	control,
	name,
	placeholder,
	error,
}) => {
	return (
		<>
			<div className="flex flex-col">
				<span className="font-medium text-base">{placeholder}</span>
				<Controller
					name={name}
					control={control}
					render={({ field }) => (
						<Input
							style={{ padding: 8 }}
							// placeholder={placeholder}
							{...field}
							status={error && 'error'}
						/>
					)}
				/>
				{error && <span className="text-red-500 text-sm">{error.message}</span>}
			</div>
		</>
	);
};
