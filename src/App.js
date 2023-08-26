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

let accounts = [account1, account2, account3];

function App() {
	const [currency, setCurrency] = useState('euro');
	const [accountMovements, setAccountMovements] = useState(account1);
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

	const totalIncome = accountMovements[0].deposits.reduce(
		(acc, mov) => acc + mov[0],
		0
	);
	const totalExpenses = accountMovements[1]?.expenses.reduce(
		(acc, mov) => acc + mov[0],
		0
	);

	const loggedInAccount = accounts.find((acc) => {
		return acc[0].owner === user;
	});

	function switchCurrency(e) {
		setCurrency((curState) =>
			curState === 'euro' ? (curState = 'usd') : 'euro'
		);

		setSort(false);
	}

	function LogUserOut() {
		setIsLoggedIn(false);
		setUser('');
	}

	return (
		<BrowserRouter>
			<Routes>
				<Route
					index
					element={
						<>
							<ResponsiveAppBar
								accountMovements={accountMovements}
								setUser={setUser}
								setPin={setPin}
								setClosePin={setClosePin}
								switchCurrency={switchCurrency}
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
								accountMovements={accountMovements}
								setUser={setUser}
								setPin={setPin}
								setClosePin={setClosePin}
								switchCurrency={switchCurrency}
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
									accountMovements={accountMovements}
									totalExpenses={totalExpenses}
									totalIncome={totalIncome}
									currency={currency}
									setCurrency={setCurrency}
									setSort={setSort}
									sort={sort}
									accounts={accounts}
									user={user}
									setAccountMovements={setAccountMovements}
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
							setAccountMovements={setAccountMovements}
						/>
					}
				/>
				<Route path="signup" element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
