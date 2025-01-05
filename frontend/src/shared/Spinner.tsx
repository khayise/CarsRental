import React from 'react';
import { ImSpinner } from 'react-icons/im';
interface SpinnerProps {}

export const Spinner: React.FC<SpinnerProps> = ({}) => {
	return (
		<>
			<div className="place-content-center grid mt-10 w-full h-full">
				<ImSpinner className="spinning" size={48} />
			</div>
		</>
	);
};
