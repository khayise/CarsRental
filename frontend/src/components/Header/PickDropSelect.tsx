import React from 'react';

interface PickDropSelectProps {
	name: string;
	label: string;
}

export const PickDropSelect: React.FC<PickDropSelectProps> = ({ name, label }) => {
	return (
		<>
			<div className="flex-col flex-1 gap-1 flex">
				<label htmlFor="dateFromSelect" className="label">
					{label}
				</label>
				<select className="text-my-gray-200 bg-transparent font-light" name={name} id={name}>
					<option value="sad">Phuket</option>
					<option value="ads">Mai Khao Beach</option>
					<option value="asd">Naying Beach</option>
					<option value="ads">Nai Ton Beach</option>
					<option value="ads">Bang Tao Beach</option>
					<option value="ads">Kamala Beach</option>
					<option value="ads">Patong Beach</option>
					<option value="ads">Karon Beach</option>
					<option value="ads">Kata Beach</option>
					<option value="ads">Rawai Beach</option>
					<option value="ads">Thalang</option>
					<option value="ads">Katu</option>
					<option value="ads">Chalong</option>
					<option value="ads">Panwa</option>
				</select>
			</div>
		</>
	);
};
