import React, { useState } from 'react';
import MainWrapper from './UI/MainWrapper';
import MovementList from './components/Movements/MovementList';
import Movements from './components/Movements/Movements';

// import CloseAccount from './components/CloseAccount/CloseAccount';

import SignIn from './components/Login/SignIn';
import NewNav from './components/Navbar/NewNav';
import { Stack } from '@mui/material';
import AlertDialogSlide from './UI/AlertDialogue/AlertDialogue';
import BasicCardSummary from './components/Outline-Card/OutlinedCardSummary';
// import BasicCardFX from './components/Outline-Card/OutlinedCardFX';
// import BasicCardTransaction from './components/Outline-Card/OutlineCardTransfer';
import CloseAccountModal from './UI/AlertDialogue/CloseAccountModal';
import Toast from './UI/AlertDialogue/Toast';
import PieChart from './components/Charts/Pie';
import PieEuro from './components/Charts/PieEuro';

import classes from './components/Charts/pie_wrapper.Module.css';

const account1 = [
	{
		owner: 'dd',
		pin: 4444,
		interestRate: 1.2,
		movements: [
			// [1200, '2023-11-18'],
			// [4515.23, '2023-12-23'],
			// [1006.5, '2022-01-28'],
			// [200, '2022-08-01'],
			[62.21, '2021-05-08'],
			[133.9, '2021-05-27'],
			[791.97, '2020-07-11'],
			[130, '2019-07-12'],
		],
	},
	{
		expenses: [
			[-100, '2022-11-18'],
			[-45.23, '2022-12-23'],
			[-250.5, '2022-01-28'],
			[-2500, '2020-04-16'],
			[-242.21, '2020-05-08'],
			// [-148.9, '2020-05-27'],
			// [-50.97, '2019-12-11'],
			// [-1500, '2018-12-16'],
		],
		locale: 'en-GB',
	},
];

const account2 = [
	{
		owner: 'jd',
		interestRate: 1.5,
		pin: 2222,
		movements: [
			[1200, '2019-11-18'],
			[1300, '2019-12-23'],
			[100, '2022-12-15'],
		],
	},
	{
		expenses: [
			[-100, '2019-11-18'],
			[-45, '2019-12-23'],
			[-25, '2022-12-17'],
		],
		locale: 'en-GB',
	},
];

export const account3 = [
	{
		owner: 'js',
		interestRate: 1.2, // %
		pin: 1111,
		movements: [
			[200, '2019-11-18'],
			[455.23, '2019-12-23'],
			[306.5, '2020-01-28'],
			[2500, '2020-04-01'],
			[642.21, '2020-05-08'],
			[133.9, '2020-05-27'],
			// [79.97, '2022-12-16'],
			// [1300.56, '2022-12-17'],
		],
	},
	{
		expenses: [
			[-100, '2019-11-18'],
			[-45.23, '2019-12-23'],
			[-250.5, '2020-01-28'],
			[-2500, '2020-04-01'],
			[-242.21, '2020-05-08'],
			[-133.9, '2020-05-27'],
			// [-50.97, '2022-12-11'],
			// [-1500, '2022-12-12'],
		],
		currency: 'EUR',
		locale: 'pt-PT', // de-DE
	},
];

let accounts = [account1, account2, account3];

function App() {
	const [currency, setCurrency] = useState('euro');
	const [accountMovements, setAccountMovements] = useState(account1);
	const [sort, setSort] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const [user, setUser] = useState('');
	const [pin, setPin] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [closePin, setClosePin] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [closeUser, setCloseUser] = useState('');
	const [open, setOpen] = React.useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [openToast, setOpenToast] = useState(false);

	const totalIncome = accountMovements[0].movements.reduce(
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
	}

	return (
		<>
			{!isLoggedIn ? (
				<SignIn
					pin={pin}
					user={user}
					setUser={setUser}
					setPin={setPin}
					loggedInAccount={loggedInAccount}
					setIsLoggedIn={setIsLoggedIn}
					setAccountMovements={setAccountMovements}
				/>
			) : (
				<>
					<MainWrapper classname={MainWrapper}>
						<NewNav
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
						/>
						<AlertDialogSlide
							open={open}
							setOpen={setOpen}
							LogUserOut={LogUserOut}
						/>
						<CloseAccountModal
							openModal={openModal}
							setOpenModal={setOpenModal}
							LogUserOut={LogUserOut}
						/>
						<Toast openToast={openToast} setOpenToast={setOpenToast} />
						<Stack
							direction={{ s: 'column', sm: 'row' }}
							sx={{
								justifyContent: 'space-between',
								mb: 2,
								mt: 2,
							}}
						>
							<BasicCardSummary
								sx={{
									width: {
										lg: 200,
									},
								}}
								accountMovements={accountMovements}
								totalExpenses={totalExpenses}
								totalIncome={totalIncome}
								currency={currency}
								setSort={setSort}
								accounts={accounts}
								user={user}
							/>
							{/* <BasicCardFX
								sx={{
									width: {
										lg: 200,
									},
								}}
								accountMovements={accountMovements}
								setAccountMovements={setAccountMovements}
								currency={currency}
								totalExpenses={totalExpenses}
								totalIncome={totalIncome}
								setSort={setSort}
								accounts={accounts}
								user={user}
								setOpenToast={setOpenToast}
							/>
							<BasicCardTransaction
								accountMovements={accountMovements}
								setAccountMovements={setAccountMovements}
								currency={currency}
								totalExpenses={totalExpenses}
								totalIncome={totalIncome}
								setSort={setSort}
								accounts={accounts}
								user={user}
								setOpenToast={setOpenToast}
							/> */}
						</Stack>
						<Stack
							direction={{ xs: 'column', md: 'row' }}
							sx={{
								backgroundColor: '#EEEEEE',
								mt: '1rem',
								display: 'flex',
								// padding: '1rem',
							}}
							className={classes.pie_wrapper}
						>
							<PieChart
								accountMovements={accountMovements}
								currency={currency}
								sort={sort}
							/>
							<PieEuro
								accountMovements={accountMovements}
								currency={currency}
								sort={sort}
							/>
						</Stack>
						<MovementList>
							<Movements
								accountMovements={accountMovements}
								currency={currency}
								sort={sort}
							/>
						</MovementList>
					</MainWrapper>
				</>
			)}
		</>
	);
}

export default App;
