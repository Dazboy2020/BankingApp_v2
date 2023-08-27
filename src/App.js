import React, { useState } from 'react';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResponsiveAppBar from './Navbar/NewNav';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import MainApp from './pages/MainApp';

import { account1, account2, account3 } from './accounts';
import { ContextProvider } from './context/context';

let accounts = [account1, account2, account3];

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const [user, setUser] = useState('');

	function LogUserOut() {
		setIsLoggedIn(false);
		setUser('');
	}

	const loggedInAccount = accounts.find((acc) => {
		return acc[0].owner === user;
	});

	return (
		<ContextProvider>
			<BrowserRouter>
				<Routes>
					<Route
						index
						element={
							<>
								<ResponsiveAppBar
									setUser={setUser}
									LogUserOut={LogUserOut}
									user={user}
									isLoggedIn={isLoggedIn}
									setIsLoggedIn={setIsLoggedIn}
								/>
								{!isLoggedIn ? <Homepage /> : <MainApp />}
							</>
						}
					/>
					<Route
						path="application"
						element={
							<>
								<ResponsiveAppBar
									setUser={setUser}
									LogUserOut={LogUserOut}
									user={user}
									isLoggedIn={isLoggedIn}
									setIsLoggedIn={setIsLoggedIn}
								/>
								{user && <MainApp LogUserOut={LogUserOut} />}
							</>
						}
					/>
					<Route
						path="login"
						element={
							<SignIn
								user={user}
								setUser={setUser}
								loggedInAccount={loggedInAccount}
								setIsLoggedIn={setIsLoggedIn}
								isLoggedIn={isLoggedIn}
							/>
						}
					/>
					<Route path="signup" element={<SignUp />} />
				</Routes>
			</BrowserRouter>
		</ContextProvider>
	);
}

export default App;
