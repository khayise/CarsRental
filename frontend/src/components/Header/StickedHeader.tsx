import React, { useEffect, useState } from 'react';

import { throttle } from '@functions/debounce';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';

import logo from '@images/logo.svg';

interface StickedHeader {}

export const StickedHeader: React.FC<StickedHeader> = ({}) => {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = throttle(() => {
			if (window.scrollY === 0) {
				setIsScrolled(false);
			} else {
				setIsScrolled(true);
			}
		}, 100);

		document.addEventListener('scroll', handleScroll);

		return () => document.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<header
				className={`top-0 fixed ${isScrolled ? 'bg-black backdrop-blur-sm' : 'bg-transparent'} z-10 py-4 flex justify-center items-center  duration-100 w-full  bg-opacity-50`}>
				<nav className="container">
					<ul className="flex items-baseline gap-6 w-full font-medium text-white overflow-auto">
						<li className="flex-shrink-0 cursor-pointer">
							<Link to={'/'}>
								<img
									className="w-[110px] h-[33px] object-cover"
									height={33}
									width={110}
									src={logo}
									alt={'logo'}
								/>
							</Link>
						</li>
						<Navigation />
					</ul>
				</nav>
			</header>
		</>
	);
};
