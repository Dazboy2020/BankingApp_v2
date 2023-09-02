import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SpinnerFullPage from './components/Spinner/SpinnerFullPage';

import ProtectedRoute from './pages/ProtectedRoute';

const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const MainApp = lazy(() => import('./pages/MainApp'));
const ResponsiveAppBar = lazy(() => import('./components/Navbar/NewNav'));
const Homepage = lazy(() => import('./components/Homepage/Homepage'));
const About = lazy(() => import('./pages/About'));
const Expenses = lazy(() => import('./pages/Expenses'));
const Deposits = lazy(() => import('./pages/Deposits'));
const Account = lazy(() => import('./pages/Account'));
const Analytics = lazy(() => import('./pages/Analytics'));

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<SpinnerFullPage />}>
				<Routes>
					<Route
						index
						element={
							<>
								<ResponsiveAppBar />
								<Homepage />
							</>
						}
					/>
					<Route
						path="overview"
						element={
							<ProtectedRoute>
								<MainApp />
							</ProtectedRoute>
						}
					/>
					<Route path="login" element={<SignIn />} />
					<Route path="signup" element={<SignUp />} />
					<Route path="about" element={<About />} />
					<Route path="expenses" element={<Expenses />} />
					<Route path="deposits" element={<Deposits />} />
					<Route path="analytics" element={<Analytics />} />
					<Route path="account" element={<Account />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
