import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import { Layout } from './layouts/Layout';
import { HomePage } from './pages/HomePage';
import { CarPage } from './pages/CarPage';
import { SearchPage } from './pages/SearchPage';

import ScrollToTop from './features/ScrollToTop';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { Redirect } from './features/Redirect';
import { RoutesPage } from './pages/RoutesPage';
import { PartnershipPage } from './pages/PartnershipPage';

import './index.css';
import { ContractPage } from './pages/ContractPage';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route index path="/" element={<HomePage />} />
				<Route path="*" element={<Redirect />} />
				<Route element={<Layout />}>
					<Route index path="/cars/:carId" element={<CarPage />} />
					<Route path="/cars/search" element={<SearchPage />} />
					<Route path="/routes" element={<RoutesPage />} />
					<Route path="/partnership" element={<PartnershipPage />} />
					<Route path="/contract" element={<ContractPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</QueryClientProvider>,
);
