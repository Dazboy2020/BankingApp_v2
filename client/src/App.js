import React, { Suspense, lazy } from 'react';
import axios from 'axios';
import { AnimatePresence } from 'framer-motion';

import { Routes, Route, useLocation } from 'react-router-dom';
import SpinnerFullPage from './components/spinner/SpinnerFullPage';

import ProtectedRoute from './pages/ProtectedRoute';

import Toast from './UI/AlertDialogue/Toast';
import { blue, purple } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { useDarkMode } from './hooks/useDarkMode';

const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const MainApp = lazy(() => import('./pages/MainApp'));
const Homepage = lazy(() => import('./components/homepage/Homepage'));
const About = lazy(() => import('./pages/About'));
const Expenses = lazy(() => import('./pages/Expenses'));
const Deposits = lazy(() => import('./pages/Deposits'));
const Account = lazy(() => import('./pages/Account'));
const Charts = lazy(() => import('./pages/Charts'));

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {
	const { isDarkMode } = useDarkMode();
	const location = useLocation();

	const theme = createTheme({
		palette: {
			primary: {
				main: blue[800],
			},
			secondary: {
				main: purple[500],
			},
		},
		components: {
			MuiDrawer: {
				styleOverrides: {
					paper: {
						background: isDarkMode ? '#171717' : '#242a2e',
						color: '#fff',
					},
				},
			},
			MuiSvgIcon: {
				styleOverrides: {
					root: {
						color: 'white',
						fontSize: '3rem',
					},
				},
			},
			MuiAppBar: {
				styleOverrides: {
					root: {
						backgroundColor: '#343a40',
					},
					colorDefault: {
						'& .MuiSvgIcon-root': {
							color: 'white',
						},
					},
				},
			},
			MuiTypography: {
				styleOverrides: {
					root: {
						// fontSize: '24px', // Set your desired font size
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						// backgroundColor: 'MediumVioletRed', // Set desired background color here
						// color: 'white',
						backgroundColor: '#52525b', // Set desired background color here
						color: 'white',
						fontSize: '1.1rem',
						letterSpacing: '.1rem',
						paddingRight: '.8rem',
						mr: '10px',
						fontWeight: '500',
						mt: '.3rem',
						pl: '1rem',
						'&.css-ikss9a-MuiTypography-root': {
							letterSpacing: '.1rem',
						},
						padding: { xs: '.6rem', s: '.5rem' },
						'&:hover': {
							backgroundColor: '#3f3f46',
							cursor: 'pointer',
						},
					},
				},
			},
			MuiPaper: {
				styleOverrides: {
					root: {
						backgroundColor: isDarkMode ? '#171717' : '#e5e5e5',
						transition: '400ms',
					},
				},
			},
			MuiCardContent: {
				styleOverrides: {
					root: {
						'.MuiCardContent-root': {
							pb: { xs: 0, s: 0.5, sm: 1.2 },
						},
					},
				},
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Suspense fallback={<SpinnerFullPage />}>
				<Toast />
				<AnimatePresence mode="wait">
					<Routes location={location} key={location.pathname}>
						<Route index element={<Homepage />} />

						<Route path="login" element={<SignIn />} />
						<Route path="signup" element={<SignUp />} />
						<Route path="forgotpassword" element={<ForgotPassword />} />
						<Route
							path="resetpassword/:resetToken/"
							element={<ResetPassword />}
						/>

						{/* //!ProtectedRoutes */}
						<Route
							path="about"
							element={
								<ProtectedRoute>
									<About />
								</ProtectedRoute>
							}
						/>
						<Route
							path="expenses"
							element={
								<ProtectedRoute>
									<Expenses />
								</ProtectedRoute>
							}
						/>
						<Route
							path="deposits"
							element={
								<ProtectedRoute>
									<Deposits />
								</ProtectedRoute>
							}
						/>
						<Route
							path="charts"
							element={
								<ProtectedRoute>
									<Charts />
								</ProtectedRoute>
							}
						/>
						<Route
							path="account"
							element={
								<ProtectedRoute>
									<Account />
								</ProtectedRoute>
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
					</Routes>
				</AnimatePresence>
			</Suspense>
		</ThemeProvider>
	);
}

export default App;
