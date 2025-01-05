import React from 'react';

interface TextContainerProps {
	title?: string;
	children?: React.ReactNode;
	className?: string;
}

export const TextContainer: React.FC<TextContainerProps> = ({ children, title, className }) => {
	return (
		<>
			<div className={`${className ? className : ''} flex flex-col gap-8 max-w-[1000px]`}>
				{title && <h2 className="self-start">{title}</h2>}
				{children}
			</div>
		</>
	);
};
