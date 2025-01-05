import { motion } from 'framer-motion';
import React from 'react';

interface PartnershipBlockProps {
	img: string;
	id: string;
	imgPosition?: 'left' | 'right';
	title: string;
	text: string;
}

export const PartnershipBlock: React.FC<PartnershipBlockProps> = ({
	img,
	id,
	imgPosition = 'left',
	title,
	text,
}) => {
	const baseDuration = 0.6;
	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 20 }}
				viewport={{ amount: 0, once: true }}
				transition={{ duration: baseDuration }}
				id={id}
				className="flex md:flex-row flex-col items-start gap-10">
				<img
					className={`flex-shrink max-w-full  md:max-w-[400px] ${imgPosition === 'left' ? '' : 'md:order-2'}`}
					alt="car-owner-image"
					src={img}
				/>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 20 }}
					viewport={{ amount: 0.5, once: true }}
					transition={{ delay: baseDuration / 2, duration: baseDuration }}
					className="">
					<h2>{title}</h2>
					<p>{text}</p>
				</motion.div>
			</motion.div>
		</>
	);
};
