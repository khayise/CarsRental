import React from 'react';
import { NavItem } from './NavItem';

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = ({}) => {
	return (
		<>
			<NavItem to="/routes" title={'Routes'} />
			<NavItem to="/partnership" title={'Partnership'} />
			<NavItem to="/contract" title={'Contract'} />
			<a
				target="blank"
				className="text-base text-nowrap sm:text-[16px] hover:underline duration-100 cursor-pointer"
				href="https://portfoilio-six.vercel.app/">
				Contact us
			</a>
		</>
	);
};
