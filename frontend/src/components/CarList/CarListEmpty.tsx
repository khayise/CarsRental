import { motion } from 'framer-motion';
import React from 'react';
import { appearAnimationConfig } from 'src/framer-configs/appear';

interface CarListEmptyProps {}

export const CarListEmpty: React.FC<CarListEmptyProps> = ({}) => {
	return (
		<>
			<motion.h2 {...appearAnimationConfig} className="text-center">
				We did not find any car by your parameters :/
			</motion.h2>
		</>
	);
};
