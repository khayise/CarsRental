import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SubmitButton } from '@components/Filters/FilterForm/SubmitButton';
import { Card } from 'src/shared/Card';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ControlledInput } from './ControlledInput';
import { Button, Modal } from 'antd';
import { useTourStore } from 'src/store/tourStore';
import { useInsuranceStore } from 'src/store/insuranceStore';

interface OrderFormProps {}

export const OrderForm: React.FC<OrderFormProps> = ({}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
	const { setIsTourOpen } = useTourStore();
	const { isInsured } = useInsuranceStore();

	const handleOk = () => {
		setConfirmLoading(true);
		setTimeout(() => {
			setConfirmLoading(false);
			setIsOpen(false);
		}, 2000);
	};

	const handleCancel = () => {
		const insuranceSwitch = document.getElementById('#insuranceSwitch');

		if (insuranceSwitch) {
			insuranceSwitch.scrollIntoView({ behavior: 'smooth', block: 'center' });
			setIsTourOpen(true);
		}
		setIsOpen(false);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	const validationSchema = yup.object({
		firstName: yup.string().required('This field is required'),
		secondName: yup.string().required('This field is required'),
		email: yup.string().required('This field is required').email('Invalid email address'),
	});

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IOrderForm>({ resolver: yupResolver(validationSchema) });

	const onSubmit: SubmitHandler<IOrderForm> = (data) => {
		if (!isInsured) {
			setIsOpen(true);
		} else {
			handleOk();
		}
		console.log(data);
	};

	return (
		<>
			<form autoComplete="off" className="" onSubmit={handleSubmit(onSubmit)}>
				<Card className="flex flex-col gap-2">
					<span className="font-bold text-lg">Your information</span>
					<ControlledInput
						control={control}
						name="firstName"
						placeholder="First name"
						error={errors.firstName}
					/>

					<ControlledInput
						name="secondName"
						control={control}
						placeholder="Second Name"
						error={errors.secondName}
					/>

					<ControlledInput
						name="email"
						control={control}
						placeholder="Email"
						error={errors.email}
					/>
				</Card>

				<SubmitButton
					buttonProps={{
						loading: confirmLoading,
						className: 'mt-6',
						htmlType: 'submit',
						size: 'large',
						type: 'primary',
						block: true,
					}}>
					Confirm a booking
				</SubmitButton>
			</form>
			<Modal
				destroyOnClose
				centered
				okButtonProps={{ type: 'default' }}
				cancelButtonProps={{ type: 'primary' }}
				title={'Whooops...'}
				onCancel={handleClose}
				footer={() => (
					<div className="flex flex-wrap justify-end items-end gap-2">
						<Button onClick={handleCancel} type="primary">
							Show insurance
						</Button>
						<Button loading={confirmLoading} onClick={handleOk} type="default">
							Continue without insurance
						</Button>
					</div>
				)}
				open={isOpen}>
				<p className="font-bold text-base">It looks like you have forget about insurance.</p>
				<p className="text-base">
					We strongly recommend purchasing insurance to protect yourself from additional expenses
					caused by unforeseen circumstances.
				</p>
			</Modal>
		</>
	);
};
