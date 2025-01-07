import React from 'react';

import { Skeleton } from 'antd';
import { CarFullDescriptionSkeleton } from 'src/shared/CarFullDescriptionSkeleton';

const { Image } = Skeleton;

interface CarCardSkeletonProps {}

export const CarCardSkeleton: React.FC<CarCardSkeletonProps> = ({}) => {
	return (
		<>
			<div className="flex flex-col gap-2 bg-white outline-my-gray p-4 rounded-lg max-w-96 h-full hover:outline outline-1">
				<Image active style={{ width: 353, height: 183 }} />
				<Skeleton.Input active />
				<CarFullDescriptionSkeleton />

				<div className="flex justify-between items-center">
					<span>
						<Skeleton.Input active />
					</span>
					<Skeleton.Button active />
				</div>
			</div>
		</>
	);
};
