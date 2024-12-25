import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import { Layout } from './layouts/Layout';
import { Home } from './pages/Home';
import { Car } from './pages/Car';
import { Search } from './pages/Search';

import ScrollToTop from './features/ScrollToTop';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import './index.css';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={queryClient}>
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route index path="/" element={<Home />} />
				<Route element={<Layout />}>
					<Route index path="/cars/:carId" element={<Car />} />
					<Route path="/cars/search" element={<Search />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</QueryClientProvider>,
);
