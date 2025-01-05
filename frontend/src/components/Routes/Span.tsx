import React from 'react';

interface SpanProps {
	children: React.ReactNode;
}

export const Span: React.FC<SpanProps> = ({ children }) => {
	return (
		<>
			<span className="font-bold text-md">{children}</span>
		</>
	);
};
