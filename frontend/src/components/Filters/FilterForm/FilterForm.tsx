import React from 'react';
import { FilterDateRange } from '../DateRangePicker/FilterDateRange';
import { FilterFormItem } from './FilterFormItem';
import { Select } from '../Select/Select';
import { Range } from '../Range/Range';
import { IFiltersForm } from '../../../types/IFiltersForm';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { useSearchParamsStore } from '../../../store/searchParamsStore';
import { SubmitButton } from './SubmitButton';
import { useFetchCars } from '@api/Cars';

interface FilterFormProps {}

export const FilterForm: React.FC<FilterFormProps> = ({}) => {
	const methods = useForm<IFiltersForm>();
	const { register, handleSubmit } = methods;

	const { setSearchParams } = useSearchParamsStore();
	const { isFetching } = useFetchCars();

	const onSubmit: SubmitHandler<IFiltersForm> = (data) => {
		const params = new URLSearchParams(Object.entries(data));
		setSearchParams(params.toString());
	};

	return (
		<>
			<FormProvider {...methods}>
				<form className="flex flex-col items-start gap-2" onSubmit={handleSubmit(onSubmit)}>
					<FilterFormItem label="Dates" filterComponent={<FilterDateRange register={register} />} />
					<FilterFormItem
						label="Pick-up location"
						filterComponent={
							<Select register={register} className="text-my-black-500" name={'pickUpLocation'} />
						}
					/>
					<FilterFormItem
						label="Drop-off location"
						filterComponent={
							<Select register={register} className="text-my-black-500" name={'dropOffLocation'} />
						}
					/>
					<FilterFormItem label="Price" filterComponent={<Range />} />
					{/* <button disabled={isFetching} className="mt-4 w-full button" type="submit">
						Search
					</button> */}
					<SubmitButton
						buttonProps={{
							loading: isFetching,
							size: 'large',
							type: 'primary',
							htmlType: 'submit',
							block: true,
						}}>
						Search
					</SubmitButton>
				</form>
			</FormProvider>
		</>
	);
};
