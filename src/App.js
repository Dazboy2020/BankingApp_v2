import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResponsiveAppBar from './Navbar/NewNav';
import Homepage from './components/Homepage/Homepage';
import MainApp from './pages/MainApp';

import { useAppContext } from './context/context';

function App() {
	const { user } = useAppContext();

	return (
		<BrowserRouter>
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
						<>
							<ResponsiveAppBar />
							{user && <MainApp />}
						</>
					}
				/>
				<Route path="login" element={<SignIn />} />
				<Route path="signup" element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
