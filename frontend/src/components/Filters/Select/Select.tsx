import React, { ChangeEvent } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IFiltersForm } from '../../../types/IFiltersForm';
import { usePickDropLocationStore } from 'src/store/pickDropLocationStore';

interface SelectProps {
	name: keyof IFiltersForm;
	className?: string;
	register?: UseFormRegister<IFiltersForm>;
}

export const Select: React.FC<SelectProps> = ({ name, className, register }) => {
	const { pickLocation, dropLocation, setPickLocation, setDropLocation } =
		usePickDropLocationStore();

	const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
		if (name === 'pickUpLocation') {
			setPickLocation(e.target.value);
		}
		if (name === 'dropOffLocation') {
			setDropLocation(e.target.value);
		}
	};

	if (register) {
		return (
			<select
				{...register(name, {
					value: name === 'pickUpLocation' ? pickLocation : dropLocation,
					onChange: (e) => onChange(e),
				})}
				className={`bg-transparent ${className ? className : 'font-light text-my-gray-200'} `}
				id={name}>
				<option value="Phuket">Phuket</option>
				<option value="MaiKhaoBeach">Mai Khao Beach</option>
				<option value="NayingBeach">Naying Beach</option>
				<option value="NaiTonBeach">Nai Ton Beach</option>
				<option value="BangTaoBeach">Bang Tao Beach</option>
				<option value="KamalaBeach">Kamala Beach</option>
				<option value="PatongBeach">Patong Beach</option>
				<option value="KaronBeach">Karon Beach</option>
				<option value="KataBeach">Kata Beach</option>
				<option value="RawaiBeach">Rawai Beach</option>
				<option value="Thalang">Thalang</option>
				<option value="Katu">Katu</option>
				<option value="Chalong">Chalong</option>
				<option value="Panwa">Panwa</option>
			</select>
		);
	}

	return (
		<select
			value={name === 'pickUpLocation' ? pickLocation : dropLocation}
			onChange={(e) => onChange(e)}
			className={`bg-transparent ${className ? className : 'font-light text-my-gray-200'} `}
			name={name}
			id={name}>
			<option value="Phuket">Phuket</option>
			<option value="MaiKhaoBeach">Mai Khao Beach</option>
			<option value="NayingBeach">Naying Beach</option>
			<option value="NaiTonBeach">Nai Ton Beach</option>
			<option value="BangTaoBeach">Bang Tao Beach</option>
			<option value="KamalaBeach">Kamala Beach</option>
			<option value="PatongBeach">Patong Beach</option>
			<option value="KaronBeach">Karon Beach</option>
			<option value="KataBeach">Kata Beach</option>
			<option value="RawaiBeach">Rawai Beach</option>
			<option value="Thalang">Thalang</option>
			<option value="Katu">Katu</option>
			<option value="Chalong">Chalong</option>
			<option value="Panwa">Panwa</option>
		</select>
	);
};
