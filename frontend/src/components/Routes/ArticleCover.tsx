import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface ArticleCoverProps {
	src: string;
	text: string;
}

export const ArticleCover: React.FC<ArticleCoverProps> = ({ src, text }) => {
	return (
		<>
			<LazyLoadImage className="mt-24" src={src} alt="Image" effect="opacity" />
			<span className="block text-right mt-1 mb-24 text-sm italic self-end">{text}</span>
		</>
	);
};
