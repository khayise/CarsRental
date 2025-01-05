import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Footer } from '@components/Footer/Footer';

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({}) => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};
