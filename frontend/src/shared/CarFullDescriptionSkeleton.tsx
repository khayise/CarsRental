import React from 'react';
import SkeletonInput from 'antd/es/skeleton/Input';

interface CarFullDescriptionSkeletonProps {}

export const CarFullDescriptionSkeleton: React.FC<CarFullDescriptionSkeletonProps> = ({}) => {
	return (
		<>
			<div className="gap-2 grid grid-cols-2">
				<SkeletonInput size="small" active />
				<SkeletonInput size="small" active />
				<SkeletonInput size="small" active />
				<SkeletonInput size="small" active />
			</div>
		</>
	);
};
