import { Switch } from 'antd';
import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

import { useInsuranceStore } from 'src/store/insuranceStore';
import { useTourStore } from 'src/store/tourStore';

interface InsuranceSwitchProps {}

export const InsuranceSwitch: React.FC<InsuranceSwitchProps> = ({}) => {
	const { isInsured, setIsInsured } = useInsuranceStore();
	const { isTourOpen, setIsTourOpen } = useTourStore();

	const ref = useRef<HTMLDivElement | null>(null);
	const isInView = useInView(ref);

	const controls = useAnimation();

	const handleWave = async () => {
		controls.start({
			scale: [1, 1.3, 1],
			opacity: [0, 0.5, 0],
			transition: {
				repeat: 3,
				duration: 0.6,
				delay: 0.2,
				ease: 'easeOut',
			},
		});
		setIsTourOpen(false);
	};

	useEffect(() => {
		if (isInView && isTourOpen) {
			handleWave();
		}
	}, [isInView, isTourOpen]);

	return (
		<>
			<div id="#insuranceSwitch" className="flex gap-2 self-end">
				<span className="font-medium">Include insurance</span>
				<div ref={ref} className="relative">
					<Switch className="z-10" checked={isInsured} onChange={setIsInsured} />
					<motion.div
						initial={{ opacity: 0 }}
						animate={controls}
						style={{
							position: 'absolute',
							top: '0%',
							left: '0%',
							width: '100%',
							height: '100%',
							borderRadius: '16px',
							backgroundColor: 'var(--my-blue)',
							zIndex: 0,
							pointerEvents: 'none',
							// transform: 'translate(-50%, -50%)',
						}}
					/>
				</div>
			</div>
		</>
	);
};
