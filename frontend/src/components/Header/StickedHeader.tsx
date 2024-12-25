import React, { useEffect, useState } from 'react';
import { trottle } from '../../functions/debounce';
import logo from '../../../public/images/logo.svg';
import { NavItem } from './NavItem';
import { Link } from 'react-router-dom';

interface StickedHeader {}

export const StickedHeader: React.FC<StickedHeader> = ({}) => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		const hanldeScroll = trottle(() => {
			if (window.scrollY === 0) {
				setIsScrolled(false);
			} else {
				setIsScrolled(true);
			}
		}, 100);

		document.addEventListener('scroll', hanldeScroll);

		return () => document.removeEventListener('scroll', hanldeScroll);
	}, []);

	return (
		<>
			<header
				className={`top-0 fixed ${isScrolled ? 'bg-black backdrop-blur-sm' : 'bg-transparent'} z-10 py-4 flex justify-center items-center  duration-100 w-full  bg-opacity-50`}>
				<nav className="container">
					<ul className=" flex items-baseline gap-6 font-medium  text-white">
						<li className="cursor-pointer">
							<Link to={'/'}>
								<img className="" src={logo} alt={'logo'} />
							</Link>
						</li>
						<NavItem title={'Routes'} />
						<NavItem title={'Partnership'} />
						<NavItem title={'Contract'} />
						<NavItem title={'Contact us'} />
					</ul>
				</nav>
			</header>
		</>
	);
};
