import { differenceInCalendarDays } from 'date-fns';
import React, { useEffect } from 'react';
import { useDateRangeStore } from 'src/store/dateRangeStore';
import { useInsuranceStore } from 'src/store/insuranceStore';

interface InsurancePriceObserverProps {
	children: React.ReactNode;
	car: ICar | undefined;
}

export const InsurancePriceObserver: React.FC<InsurancePriceObserverProps> = ({
	children,
	car,
}) => {
	const { startDate, endDate } = useDateRangeStore();
	const { insuranceDayPrice, setInsuranceTotalPrice } = useInsuranceStore();

	useEffect(() => {
		if (car) {
			const days = differenceInCalendarDays(endDate, startDate) + 1;
			setInsuranceTotalPrice(days * insuranceDayPrice + Math.floor(0.1 * car.basePrice));
		}
	}, [startDate, endDate, car]);
	return <>{children}</>;
};
