import React, { Suspense, lazy } from 'react';
import axios from 'axios';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SpinnerFullPage from './components/Spinner/SpinnerFullPage';

import ProtectedRoute from './pages/ProtectedRoute';

import Toast from './UI/AlertDialogue/Toast';

const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const MainApp = lazy(() => import('./pages/MainApp'));
const ResponsiveAppBar = lazy(() => import('./components/Navbar/NewNav'));
const Homepage = lazy(() => import('./components/Homepage/Homepage'));
const About = lazy(() => import('./pages/About'));
const Expenses = lazy(() => import('./pages/Expenses'));
const Deposits = lazy(() => import('./pages/Deposits'));
const Account = lazy(() => import('./pages/Account'));
const Charts = lazy(() => import('./pages/Charts'));

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<SpinnerFullPage />}>
				<Toast />

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
					<Route path="login" element={<SignIn />} />
					<Route path="signup" element={<SignUp />} />
					<Route path="forgotpassword" element={<ForgotPassword />} />
					<Route
						path="resetpassword/:resetToken/"
						element={<ResetPassword />}
					/>

					{/* //!ProtectedRoutes */}
					<Route
						path="overview"
						element={
							<ProtectedRoute>
								<MainApp />
							</ProtectedRoute>
						}
					>
						<Route path="about" element={<About />} />
						<Route path="expenses" element={<Expenses />} />
						<Route path="deposits" element={<Deposits />} />
						<Route path="charts" element={<Charts />} />
						<Route path="account" element={<Account />} />
						{/* <Route path="overview" element={<MainApp />} /> */}
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
