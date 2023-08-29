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
	currency: 'euro',
	sort: false,
};

function reducer(state, action) {
	switch (action.type) {
		case 'field': {
			return {
				...state,
				[action.fieldName]: action.payload,
				error: false,
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
					loggedInAccount: loggedInAccount[0].owner,
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

		case 'switchCurrency':
			return {
				...state,
				currency: state.currency === 'euro' ? 'usd' : 'euro',
				sort: false,
			};

		case 'sort':
			return {
				...state,
				sort: state.sort === true ? false : true,
			};

		default:
			return state;
	}
}

function ContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, inititalState);

	const [open, setOpen] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [openToast, setOpenToast] = useState(false);
	const [closePin, setClosePin] = useState('');
	const [closeUser, setCloseUser] = useState('');

	const totalIncome = state.accountMovements[0]?.deposits.reduce(
		(acc, mov) => acc + mov[0],
		0
	);
	const totalExpenses = state.accountMovements[1]?.expenses.reduce(
		(acc, mov) => acc + mov[0],
		0
	);

	return (
		<AppContext.Provider
			value={{
				totalIncome,
				totalExpenses,
				open,
				setOpen,
				openModal,
				setOpenModal,
				openToast,
				setOpenToast,

				closePin,
				setClosePin,
				closeUser,
				setCloseUser,

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
