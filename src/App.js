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
	const [currency, setCurrency] = useState('euro');
	const [sort, setSort] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState('');
	const [pin, setPin] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [closePin, setClosePin] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [closeUser, setCloseUser] = useState('');
	const [open, setOpen] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [openToast, setOpenToast] = useState(false);

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
									currency={currency}
									open={open}
									setOpen={setOpen}
									LogUserOut={LogUserOut}
									accounts={accounts}
									setCloseUser={setCloseUser}
									user={user}
									openModal={openModal}
									setOpenModal={setOpenModal}
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
									currency={currency}
									open={open}
									setOpen={setOpen}
									LogUserOut={LogUserOut}
									accounts={accounts}
									setCloseUser={setCloseUser}
									user={user}
									openModal={openModal}
									setOpenModal={setOpenModal}
									isLoggedIn={isLoggedIn}
									setIsLoggedIn={setIsLoggedIn}
								/>
								{user && (
									<MainApp
										currency={currency}
										setCurrency={setCurrency}
										setSort={setSort}
										sort={sort}
										accounts={accounts}
										user={user}
										setOpenToast={setOpenToast}
										open={open}
										setOpen={setOpen}
										LogUserOut={LogUserOut}
										openToast={openToast}
										openModal={openModal}
										setOpenModal={setOpenModal}
									/>
								)}
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
