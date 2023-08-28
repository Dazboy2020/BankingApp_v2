import { createContext, useContext, useReducer, useState } from 'react';
import { account1, account2, account3 } from '../accounts';

const AppContext = createContext();

const inititalState = {
	accountMovements: [],
	accounts: [account1, account2, account3],
	isLoggedIn: false,
	loggedInAccount: '',
	pin: '',
	user: '',
	error: false,
};

function reducer(state, action) {
	switch (action.type) {
		case 'field': {
			return {
				...state,
				[action.fieldName]: action.payload,
			};
		}
		case 'user/LoggedIn':
			const loggedInAccount = state.accounts.find((acc) => {
				return acc[0].owner === state.user;
			});
			if (loggedInAccount && loggedInAccount[0].pin === +state.pin) {
				return {
					...state,
					accountMovements: loggedInAccount,
					isLoggedIn: true,
					loggedInAccount: state.accounts[0].owner,
					user: loggedInAccount[0].owner,
				};
			} else {
				return {
					...state,
					loggedInAccount: '',
					error: true,
					pin: '',
					user: '',
					isLoggedIn: false,
					accountMovements: [],
				};
			}

		case 'user/LoggedOut':
			return {
				...state,
				isLoggedIn: false,
				user: '',
				pin: '',
			};

		case 'add/expense-depsoit':
			return {
				...state,
				accountMovements: action.payload,
			};

		default:
			return state;
	}
}

function ContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, inititalState);
	// const { accountMovements, accounts, isLoggedIn, pin, user, error } = state;

	// let accounts = [account1, account2, account3];
	const [currency, setCurrency] = useState('euro');
	const [sort, setSort] = useState(false);
	// const [accountMovements, setAccountMovements] = useState(account1);
	const [open, setOpen] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [openToast, setOpenToast] = useState(false);
	// const [pin, setPin] = useState('');
	const [closePin, setClosePin] = useState('');
	const [closeUser, setCloseUser] = useState('');
	// const [user, setUser] = useState('');
	// const [isLoggedIn, setIsLoggedIn] = useState(false);
	// const [error, setError] = useState(false);

	const totalIncome = state.accountMovements[0]?.deposits.reduce(
		(acc, mov) => acc + mov[0],
		0
	);
	const totalExpenses = state.accountMovements[1]?.expenses.reduce(
		(acc, mov) => acc + mov[0],
		0
	);

	function switchCurrency(e) {
		setCurrency((curState) =>
			curState === 'euro' ? (curState = 'usd') : 'euro'
		);

		setSort(false);
	}

	function logUserIn(user, pin) {
		dispatch({ type: 'user/LoggedIn', payload: { user, pin } });
	}

	function LogUserOut() {
		dispatch({ type: 'user/LoggedOut' });
	}

	function handleExpenseItem(updatedAccount) {
		dispatch({ type: 'add/expense-depsoit', payload: updatedAccount });
	}

	return (
		<AppContext.Provider
			value={{
				setCurrency,
				setSort,
				switchCurrency,
				sort,
				// accountMovements,
				// setAccountMovements,
				// accounts,
				totalIncome,
				totalExpenses,
				currency,
				open,
				setOpen,
				openModal,
				setOpenModal,
				openToast,
				setOpenToast,
				// pin,
				// setPin,
				closePin,
				setClosePin,
				closeUser,
				setCloseUser,
				// user,
				// setUser,
				// isLoggedIn,
				// setIsLoggedIn,
				// loggedInAccount,
				LogUserOut,
				logUserIn,
				// error,
				// setError,
				handleExpenseItem,
				dispatch,
				state,
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
