import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ResponsiveAppBar from './Navbar/NewNav';
// import Homepage from './components/Homepage/Homepage';
import SpinnerFullPage from './components/Spinner/SpinnerFullPage';

// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import MainApp from './pages/MainApp';
import ProtectedRoute from './pages/ProtectedRoute';

const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const MainApp = lazy(() => import('./pages/MainApp'));

const ResponsiveAppBar = lazy(() => import('./Navbar/NewNav'));
const Homepage = lazy(() => import('./components/Homepage/Homepage'));
const About = lazy(() => import('./pages/About.js'));

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
						path="application"
						element={
							<ProtectedRoute>
								{/* <ResponsiveAppBar /> */}
								<MainApp />
							</ProtectedRoute>
						}
					/>
					<Route path="login" element={<SignIn />} />
					<Route path="signup" element={<SignUp />} />
					<Route path="about" element={<About />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
