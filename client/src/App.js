import React, { Suspense, lazy } from 'react';
import axios from 'axios';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SpinnerFullPage from './components/Spinner/SpinnerFullPage';

import ProtectedRoute from './pages/ProtectedRoute';

import Toast from './UI/AlertDialogue/Toast';
import { blue, purple } from '@mui/material/colors';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { useDarkMode } from './Hooks/useDarkMode';

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
	const { isDarkMode } = useDarkMode();

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
						background: isDarkMode ? '#1C1917' : '#242a2e',
						color: '#fff',
					},
				},
			},
			MuiSvgIcon: {
				styleOverrides: {
					root: {
						// Set the color to white
						color: 'white',
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
						backgroundColor: 'MediumVioletRed', // Set your desired background color here
						color: 'white',
						letterSpacing: '.1rem',
						'&.css-ikss9a-MuiTypography-root': {
							letterSpacing: '.1rem', // Adjust the letter-spacing value as needed
						},
						padding: '.5rem',
					},
				},
			},
			MuiPaper: {
				styleOverrides: {
					root: {
						backgroundColor: isDarkMode ? '#171717' : '#f0ebd8',
						transition: '400ms',
						// backgroundColor: '#1c1917',
						// borderRadius: '10px',
					},
				},
			},
		},
	});
	return (
		<ThemeProvider theme={theme}>
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
				</Suspense>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
