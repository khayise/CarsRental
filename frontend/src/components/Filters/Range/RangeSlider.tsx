import React from 'react';

import { useFetchMaxPrice } from '@api/MaxPrice';
import { throttle } from '@functions/debounce';
import { Slider, ConfigProvider } from 'antd';
import { usePriceRangeStore } from 'src/store/priceRangeStore';

interface RangeSliderProps {}

export const RangeSlider: React.FC<RangeSliderProps> = ({}) => {
	const { minPrice, maxPrice, setMinPrice, setMaxPrice } = usePriceRangeStore();
	const { data: maxPossiblePrice } = useFetchMaxPrice();

	const handleChange = throttle((min: number, max: number) => {
		setMinPrice(min);
		setMaxPrice(max);
	}, 20);
	return (
		<>
			<ConfigProvider
				theme={{
					components: {
						Slider: {
							handleColorDisabled: '#155EEF',
							dotBorderColor: '#155EEF',
							dotActiveBorderColor: '#155EEF',
							handleActiveColor: '#155EEF',
							handleColor: '#155EEF',
							trackBg: '#155EEF',
							trackHoverBg: '#155EEF',
						},
					},
				}}>
				<Slider
					min={0}
					defaultValue={[0, maxPossiblePrice ? maxPossiblePrice : 0]}
					tooltip={{ open: false }}
					value={[minPrice, maxPrice]}
					max={maxPossiblePrice ? maxPossiblePrice : 0}
					onChange={([min, max]) => handleChange(min, max)}
					range
				/>
			</ConfigProvider>
		</>
	);
};
