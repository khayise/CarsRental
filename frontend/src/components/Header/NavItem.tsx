import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
	title: string;
	to: string;
}

export const NavItem: React.FC<NavItemProps> = ({ title, to }) => {
	return (
		<>
			<Link
				to={to}
				className="text-base text-nowrap sm:text-[16px] hover:underline duration-100 cursor-pointer">
				{title}
			</Link>
		</>
	);
};
