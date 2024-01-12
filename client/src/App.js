import { useDarkMode } from './hooks/useDarkMode';
import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';
import { AnimatePresence } from 'framer-motion';

import SpinnerFullPage from './components/spinner/SpinnerFullPage';
import ProtectedRoute from './pages/ProtectedRoute';

import Toast from './UI/AlertDialogue/Toast';
import { blue, purple } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';

// import Homepage from './components/homepage/Homepage';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));

const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Homepage = lazy(() => import('./components/homepage/Homepage'));

const MainApp = lazy(() => import('./pages/MainApp'));
const About = lazy(() => import('./pages/About'));
const Expenses = lazy(() => import('./pages/Expenses'));
const Deposits = lazy(() => import('./pages/Deposits'));
const Account = lazy(() => import('./pages/Account'));
const Charts = lazy(() => import('./pages/Charts'));
const Budget = lazy(() => import('./pages/Budget'));

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
							// paddingBottom: 1,
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
						<Route element={<ProtectedRoute />}>
							<Route path="overview" element={<MainApp />} />
							<Route path="expenses" element={<Expenses />} />
							<Route path="deposits" element={<Deposits />} />
							<Route path="charts" element={<Charts />} />
							<Route path="budget" element={<Budget />} />
							<Route path="account" element={<Account />} />
							<Route path="about" element={<About />} />
						</Route>
					</Routes>
				</AnimatePresence>
			</Suspense>
		</ThemeProvider>
	);
}

export default App;
