import { createContext, useContext, useState } from 'react';
import { account1, account2, account3 } from '../accounts';

const AppContext = createContext();

// function reducer(state, action) {}

function ContextProvider({ children }) {
	let accounts = [account1, account2, account3];
	const [currency, setCurrency] = useState('euro');
	const [sort, setSort] = useState(false);
	const [accountMovements, setAccountMovements] = useState(account1);
	const [open, setOpen] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [openToast, setOpenToast] = useState(false);
	const [pin, setPin] = useState('');
	const [closePin, setClosePin] = useState('');
	const [closeUser, setCloseUser] = useState('');
	const [user, setUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const totalIncome = accountMovements[0]?.deposits.reduce(
		(acc, mov) => acc + mov[0],
		0
	);
	const totalExpenses = accountMovements[1]?.expenses.reduce(
		(acc, mov) => acc + mov[0],
		0
	);

	function switchCurrency(e) {
		setCurrency((curState) =>
			curState === 'euro' ? (curState = 'usd') : 'euro'
		);

		setSort(false);
	}

	const loggedInAccount = accounts.find((acc) => {
		return acc[0].owner === user;
	});

	function LogUserOut() {
		setIsLoggedIn(false);
		setUser('');
	}

	return (
		<AppContext.Provider
			value={{
				setCurrency,
				setSort,
				switchCurrency,
				sort,
				accountMovements,
				setAccountMovements,
				accounts,
				totalIncome,
				totalExpenses,
				currency,
				open,
				setOpen,
				openModal,
				setOpenModal,
				openToast,
				setOpenToast,
				pin,
				setPin,
				closePin,
				setClosePin,
				closeUser,
				setCloseUser,
				user,
				setUser,
				isLoggedIn,
				setIsLoggedIn,
				loggedInAccount,
				LogUserOut,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

function useAppContext() {
	const context = useContext(AppContext);
	if (context === undefined) throw new Error(Error);
	return context;
}

export { ContextProvider, useAppContext };
