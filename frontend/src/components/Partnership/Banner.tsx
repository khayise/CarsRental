import { motion } from 'framer-motion';
import React from 'react';
import { ScrollLink } from './ScrollLink';
import { Button } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import { scroll } from '@functions/scroll';

interface BannerProps {}

export const Banner: React.FC<BannerProps> = ({}) => {
	const baseAppearTime = 0.2;
	return (
		<>
			<div className="relative partnership-bg-image partnership-blacked w-full min-h-screen text-center text-white">
				<div className="z-10 flex flex-col justify-between px-6 py-24 sm:py-48 h-full">
					<motion.h1
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: baseAppearTime * 1 }}
						className="text-[48px] sm:text-[60px]">
						{' '}
						{/**INDEX OF ELEMENT */}
						Unlock New Earning Opportunities with Our Car Rental Partnership!
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: baseAppearTime * 2 }}
						className="text-balance">
						Whether you're a <ScrollLink to="#carOwner">car owner</ScrollLink>,{' '}
						<ScrollLink to="#agency">travel agency</ScrollLink>, or{' '}
						<ScrollLink to="#influencer">influencer</ScrollLink>, we have a program tailored just
						for you. Earn up to 70% on every contract, enjoy transparent terms, and work with a
						reliable team. Start earning today!
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: -30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: baseAppearTime * 3 }}>
						<h3 className="mt-24">Explore Our Partnership Programs</h3>
						<Button
							onClick={() => scroll('#carOwner')}
							size="large"
							icon={<ArrowDownOutlined />}
							className="mt-4"
							shape="circle"></Button>
					</motion.div>
				</div>
			</div>
		</>
	);
};
