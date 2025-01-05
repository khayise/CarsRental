import React from 'react';
import SkeletonImage from 'antd/es/skeleton/Image';
import SkeletonTitle from 'antd/es/skeleton/Input';
import SkeletonButton from 'antd/es/skeleton/Button';
import { CarFullDescriptionSkeleton } from 'src/shared/CarFullDescriptionSkeleton';
import { appearAnimationConfig } from 'src/framer-configs/appear';
import { MotionCard } from 'src/shared/MotionCard';

interface CarListItemSkeletonProps {}

export const CarListItemSkeleton: React.FC<CarListItemSkeletonProps> = ({}) => {
	return (
		<>
			<MotionCard
				animationConfig={appearAnimationConfig}
				className="flex flex-wrap flex-grow justify-center gap-10 outline-my-gray hover:outline outline-1">
				<SkeletonImage active style={{ width: 370, height: 200 }} />
				<div className="flex flex-col justify self-start">
					<div className="flex flex-col gap-4 self-start">
						<SkeletonTitle active />
						<CarFullDescriptionSkeleton />
					</div>
				</div>
				<div className="flex flex-col flex-1 justify-between gap-y-6">
					<div className="flex flex-col gap-2">
						<SkeletonTitle active />
						<SkeletonTitle size="small" active />
					</div>
					<SkeletonButton size="large" block active />
				</div>
			</MotionCard>
		</>
	);
};
