import React from 'react';

interface NavItemProps {
	title: string;
}

export const NavItem: React.FC<NavItemProps> = ({ title }) => {
	return (
		<>
			<li className="hover:underline cursor-pointer duration-100">{title}</li>
		</>
	);
};
