import React, { Suspense, lazy } from 'react';
import { useFetchPrivateUserData } from './hooks/useFetchPrivateUserData';
import { AnimatePresence } from 'framer-motion';
import { useDarkMode } from './hooks/useDarkMode';
import { Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';

import SpinnerFullPage from './components/spinner/SpinnerFullPage';
import ProtectedRoute from './pages/ProtectedRoute';

import Toast from './UI/AlertDialogue/Toast';
import { blue, purple } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';

const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));

const SignInPage = lazy(() => import('./pages/SignInPage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const Homepage = lazy(() => import('./components/homepage/Homepage'));

const OverviewPage = lazy(() => import('./pages/OverviewPage'));
const About = lazy(() => import('./pages/About'));
const ExpensesPage = lazy(() => import('./pages/ExpensesPage'));
const DepositsPage = lazy(() => import('./pages/DepositsPage'));
const AccountPage = lazy(() => import('./pages/AccountPage'));
const ChartsPage = lazy(() => import('./pages/ChartsPage'));
const BudgetPage = lazy(() => import('./pages/BudgetPage'));

axios.defaults.baseURL = 'http://localhost:5000';
// axios.defaults.withCredentials = true;

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
						// Set  desired font size
					},
				},
			},
			MuiButton: {
				styleOverrides: {
					root: {
						fontFamily: 'system-ui',
						backgroundColor: '#52525b', // Set desired background color here
						color: 'white',
						fontSize: { xs: '0.1rem', s: '0.1rem', md: '1.5rem', lg: '1.5rem' },
						letterSpacing: '.1rem',
						mr: '10px',
						fontWeight: '500',
						mt: '.3rem',

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
						backgroundColor: isDarkMode ? '#171717' : '#fff',
						transition: '400ms',
						padding: 1,
					},
				},
			},
			MuiCardContent: {
				styleOverrides: {
					root: {
						'&:last-child': {
							padding: 10,
						},
					},
				},
			},
			MuiInputBase: {
				styleOverrides: {
					root: {
						color: isDarkMode ? '#d6d3d1' : '#000',
					},
				},
			},
			MuiFormControl: {
				styleOverrides: {
					root: {
						border: isDarkMode ? '#d6d3d1' : '#000',
					},
				},
			},
			MuiInputLabel: {
				styleOverrides: {
					root: {
						color: isDarkMode ? '#d6d3d1' : '#000',
					},
				},
			},
		},
	});

	useFetchPrivateUserData('/userdata');

	return (
		<ThemeProvider theme={theme}>
			<Suspense fallback={<SpinnerFullPage />}>
				<Toast />
				<AnimatePresence mode="wait">
					<Routes location={location} key={location.pathname}>
						<Route index element={<Homepage />} />

						<Route path="login" element={<SignInPage />} />
						<Route path="signup" element={<SignUpPage />} />
						<Route path="forgotpassword" element={<ForgotPasswordPage />} />
						<Route
							path="resetpassword/:resetToken/"
							element={<ResetPassword />}
						/>

						{/* //!ProtectedRoutes */}
						<Route element={<ProtectedRoute />}>
							<Route path="overview" element={<OverviewPage />} />
							<Route path="expenses" element={<ExpensesPage />} />
							<Route path="deposits" element={<DepositsPage />} />
							<Route path="charts" element={<ChartsPage />} />
							<Route path="budget" element={<BudgetPage />} />
							<Route path="account" element={<AccountPage />} />
							<Route path="about" element={<About />} />
						</Route>
					</Routes>
				</AnimatePresence>
			</Suspense>
		</ThemeProvider>
	);
}

export default App;
