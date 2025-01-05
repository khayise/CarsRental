import React from 'react';
import logo_white from '@images/logo_white.svg';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
	return (
		<header
			className={`py-4 bg-my-blue flex sticky top-0 justify-center items-center z-10 duration-100 w-full`}>
			<nav className="container">
				<ul className="flex justify-between sm:justify-start items-baseline gap-6 w-full font-medium text-white overflow-auto">
					<li className="flex-shrink-0 cursor-pointer">
						<Link to={'/'}>
							<img className="" src={logo_white} alt={'logo'} />
						</Link>
					</li>
					<Navigation />
				</ul>
			</nav>
		</header>
	);
};
