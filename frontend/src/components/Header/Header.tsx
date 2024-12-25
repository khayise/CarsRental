import React from 'react';
import logo_white from '../../../public/images/logo_white.svg';
import { NavItem } from './NavItem';
import { Link } from 'react-router-dom';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
	return (
		<header
			className={`py-4 bg-my-blue flex sticky top-0 justify-center items-center z-10 duration-100 w-full`}>
			<nav className="container">
				<ul className=" flex items-baseline gap-6 font-medium  text-white">
					<li className="cursor-pointer">
						<Link to={'/'}>
							<img className="" src={logo_white} alt={'logo'} />
						</Link>
					</li>
					<NavItem title={'Routes'} />
					<NavItem title={'Partnership'} />
					<NavItem title={'Contract'} />
					<NavItem title={'Contact us'} />
				</ul>
			</nav>
		</header>
	);
};
