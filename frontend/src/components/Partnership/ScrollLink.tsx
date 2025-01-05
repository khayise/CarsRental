import React from 'react';

import { scroll } from '@functions/scroll';

interface ScrollLinkProps {
	children: React.ReactNode;
	to: string;
}

export const ScrollLink: React.FC<ScrollLinkProps> = ({ children, to }) => {
	return (
		<>
			<button
				onClick={() => scroll(to)}
				className="hover:text-green-500 underline duration-100 cursor-pointer">
				{children}
			</button>
		</>
	);
};
