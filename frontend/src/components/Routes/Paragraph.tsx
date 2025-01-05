import React from 'react';

interface ParagraphProps {
	children: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
	return (
		<>
			<p className="text-md">{children}</p>
		</>
	);
};
