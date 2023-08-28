import { createContext, useContext, useReducer, useState } from 'react';
import { account1, account2, account3 } from '../accounts';

const AppContext = createContext();

const inititalState = {
	accountMovements: [],
	accounts: [account1, account2, account3],
	isLoggedIn: false,
	pin: '',
	user: '',
	error: false,
};

function reducer(state, action) {
	switch (action.type) {
		case 'user/LoggedIn':
			const loggedInAccount = inititalState.accounts.find((acc) => {
				return acc[0].owner === inititalState.user;
			});
			if (loggedInAccount && loggedInAccount[0].pin === +inititalState.pin) {
				return {
					...state,
					accountMovements: loggedInAccount,
					isLoggedIn: true,
				};
			} else {
				return {
					Error: true,
					pin: '',
					user: '',
				};
			}

		case 'user/LoggedOut':
			return {
				...state,
				isLoggedIn: false,
				user: '',
			};

		default:
			return state;
	}
}

function ContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, inititalState);

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
	const [user, setUser] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [error, setError] = useState(false);

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
		return acc[0].owner === inititalState.user;
	});

	function logUserIn() {
		dispatch({ type: 'user/LoggedIn' });
	}

	function LogUserOut() {
		dispatch({ type: 'user/LoggedOut' });
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
				logUserIn,
				error,
				setError,
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
