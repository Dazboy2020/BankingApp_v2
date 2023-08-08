import React, { useState } from 'react';
import MainWrapper from './UI/MainWrapper';
import MovementList from './components/Movements/MovementList';
import Movements from './components/Movements/Movements';

// import CloseAccount from './components/CloseAccount/CloseAccount';

import SignIn from './components/Login/SignIn';
import NewNav from './components/Navbar/NewNav';
import { Box } from '@mui/material';
import AlertDialogSlide from './UI/AlertDialogue/AlertDialogue';
import BasicCardSummary from './components/Outline-Card/OutlinedCard';
import BasicCardFX from './components/Outline-Card/OutlinedCard2';
import BasicCardTransaction from './components/Outline-Card/OutlineCard3';
// import BasicCardCreditCard from './components/Outline-Card/OutLineCreditCard';

const account1 = [
	{
		owner: 'dd',
		pin: 4444,
		interestRate: 1.2,
		movements: [
			[1200, '2023-11-18'],
			[4515.23, '2023-12-23'],
			[-1006.5, '2022-01-28'],
			[200, '2022-08-01'],
			[-62.21, '2021-05-08'],
			[-133.9, '2021-05-27'],
			[791.97, '2020-07-11'],
			[130, '2019-07-12'],
		],
	},
	{
		movementsUSD: [
			[100, '2022-11-18'],
			[45.23, '2022-12-23'],
			[-250.5, '2022-01-28'],
			[2500, '2020-04-16'],
			[-242.21, '2020-05-08'],
			[-148.9, '2020-05-27'],
			[50.97, '2019-12-11'],
			[1500, '2018-12-16'],
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
		movementsUSD: [
			[100, '2019-11-18'],
			[45, '2019-12-23'],
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
			[-306.5, '2020-01-28'],
			[2500, '2020-04-01'],
			[-642.21, '2020-05-08'],
			[-133.9, '2020-05-27'],
			[79.97, '2022-12-16'],
			[1300.56, '2022-12-17'],
		],
	},
	{
		movementsUSD: [
			[100, '2019-11-18'],
			[45.23, '2019-12-23'],
			[-250.5, '2020-01-28'],
			[2500, '2020-04-01'],
			[-242.21, '2020-05-08'],
			[-133.9, '2020-05-27'],
			[50.97, '2022-12-11'],
			[1500, '2022-12-12'],
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
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState('');
	const [pin, setPin] = useState('');
	const [closePin, setClosePin] = useState('');
	const [closeUser, setCloseUser] = useState('');
	const [open, setOpen] = React.useState(false);

	const balanceEUR = accountMovements[0].movements.reduce(
		(acc, mov) => acc + mov[0],
		0
	);
	const balanceUSD = accountMovements[1]?.movementsUSD.reduce(
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

	function handleCloseAccount(e) {
		e.preventDefault();

		if (
			closeUser === loggedInAccount[0].owner &&
			+closePin === loggedInAccount[0].pin
		) {
			console.log('match');
			const index = accounts.findIndex((acc) => acc.owner === user);
			accounts.splice(index, 1);
			setIsLoggedIn((cur) => !cur);
			setClosePin('');
			setCloseUser('');
			setPin('');
			setUser('');
		}
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
							setIsLoggedIn={setIsLoggedIn}
							setUser={setUser}
							setPin={setPin}
							switchCurrency={switchCurrency}
							currency={currency}
							open={open}
							setOpen={setOpen}
							LogUserOut={LogUserOut}
						/>
						<AlertDialogSlide
							open={open}
							setOpen={setOpen}
							LogUserOut={LogUserOut}
						/>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								mb: 2,
								mt: 2,
							}}
						>
							<BasicCardSummary
								accountMovements={accountMovements}
								balanceUSD={balanceUSD}
								balanceEUR={balanceEUR}
								currency={currency}
								setSort={setSort}
								accounts={accounts}
								user={user}
							/>
							<BasicCardFX
								accountMovements={accountMovements}
								setAccountMovements={setAccountMovements}
								currency={currency}
								balanceUSD={balanceUSD}
								balanceEUR={balanceEUR}
								setSort={setSort}
								accounts={accounts}
								user={user}
							/>
							<BasicCardTransaction
								accountMovements={accountMovements}
								setAccountMovements={setAccountMovements}
								currency={currency}
								balanceUSD={balanceUSD}
								balanceEUR={balanceEUR}
								setSort={setSort}
								accounts={accounts}
								user={user}
							/>
							{/* <BasicCardCreditCard /> */}
						</Box>
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
