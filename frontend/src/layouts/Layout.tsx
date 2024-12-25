import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({}) => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};
