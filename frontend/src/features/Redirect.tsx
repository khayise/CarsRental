import React from 'react';
import { Navigate } from 'react-router-dom';

interface RedirectProps {}

export const Redirect: React.FC<RedirectProps> = ({}) => {
	return <Navigate to={'/'} />;
};
