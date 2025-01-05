import React from 'react';

import logo_white from '@images/logo_white.svg';
import { Navigation } from '@components/Header/Navigation';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
	return (
		<>
			<footer className="flex flex-col gap-8 bg-black mt-40 p-6 w-full text-white">
				<div className="flex sm:flex-row flex-col items-start sm:items-center gap-8">
					<img src={logo_white} alt="" />
					<ul className="grid grid-cols-2">
						<Navigation />
					</ul>
				</div>
				<span>
					&copy; 2024. Created by{' '}
					<a
						target="blank"
						className="text-my-gray-100 hover:text-white hover:underline duration-100"
						href="https://portfoilio-six.vercel.app/">
						Andrii Dedesh
					</a>
				</span>
			</footer>
		</>
	);
};
