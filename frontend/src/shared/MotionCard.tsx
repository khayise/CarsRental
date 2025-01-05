import { motion, MotionProps } from 'framer-motion';
import React from 'react';

interface MotionCardProps {
	children?: React.ReactNode;
	className?: string;
	animationConfig?: MotionProps;
}

export const MotionCard: React.FC<MotionCardProps> = ({ children, className, animationConfig }) => {
	return (
		<>
			<motion.div
				{...animationConfig}
				className={`${className ? className : ''} p-4 bg-white rounded-lg`}>
				{children}
			</motion.div>
		</>
	);
};
