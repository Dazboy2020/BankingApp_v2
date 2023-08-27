import React, { useState } from 'react';

// import CloseAccount from './components/CloseAccount/CloseAccount';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResponsiveAppBar from './Navbar/NewNav';
// import BasicCardTransaction from './components/Outline-Card/OutlineCardTransfer';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import MainApp from './pages/MainApp';

import { account1, account2, account3 } from './accounts';
import { ContextProvider } from './context/context';

let accounts = [account1, account2, account3];

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState('');
	const [pin, setPin] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [closePin, setClosePin] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [closeUser, setCloseUser] = useState('');
	// const [open, setOpen] = useState(false);
	// const [openModal, setOpenModal] = useState(false);
	// const [openToast, setOpenToast] = useState(false);

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
									setPin={setPin}
									setClosePin={setClosePin}
									LogUserOut={LogUserOut}
									setCloseUser={setCloseUser}
									user={user}
									isLoggedIn={isLoggedIn}
									setIsLoggedIn={setIsLoggedIn}
								/>
								{!isLoggedIn && <Homepage />}
							</>
						}
					/>
					<Route
						path="application"
						element={
							<>
								<ResponsiveAppBar
									setUser={setUser}
									setPin={setPin}
									setClosePin={setClosePin}
									LogUserOut={LogUserOut}
									setCloseUser={setCloseUser}
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
								pin={pin}
								user={user}
								setUser={setUser}
								setPin={setPin}
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
