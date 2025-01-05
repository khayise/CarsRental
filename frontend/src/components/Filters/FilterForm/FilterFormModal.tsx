import React, { useEffect } from 'react';
import { FilterForm } from './FilterForm';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

import { IoCloseOutline as CloseIcon } from 'react-icons/io5';
import { useFetchCars } from '../../../hooks/api/Cars';

interface FilterFormModalProps {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FilterFormModal: React.FC<FilterFormModalProps> = ({ setIsOpen }) => {
	const { isFetching } = useFetchCars();

	const handleClose = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		document.body.classList.add('overflow-hidden');

		return () => document.body.classList.remove('overflow-hidden');
	}, []);

	useEffect(() => {
		if (isFetching) {
			setIsOpen(false);
		}
	}, [isFetching]);

	return createPortal(
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { delay: 0.17 } }}
			transition={{ duration: 0.05 }}
			onClick={handleClose}
			className="top-0 left-0 z-40 fixed bg-black bg-opacity-50 w-screen h-screen">
			<motion.div
				onClick={(e) => e.stopPropagation()}
				initial={{ opacity: 0, x: '-100%' }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: '-100%' }}
				transition={{ duration: 0.1, delay: 0.05, type: 'tween' }}
				className="flex flex-col bg-white p-6 w-[300px] h-full">
				<button onClick={handleClose} className="self-end">
					<CloseIcon size={24} />
				</button>
				<FilterForm />
			</motion.div>
		</motion.div>,
		document.body,
	);
};
