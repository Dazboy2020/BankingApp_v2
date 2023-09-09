import { createContext, useContext, useReducer, useState } from 'react';
import { account1, account2, account3 } from '../accounts';

const AppContext = createContext();

const inititalState = {
	accountMovements: [],
	accounts: [account1, account2, account3],
	expenses: [],
	deposits: [],
	isLoggedIn: false,
	loggedInAccount: '',
	pin: '',
	user: '',
	error: false,
	currency: 'euro',
	sort: false,
	message: '',
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
		case 'user/MongoLoggedIn': {
			return {
				...state,
				loggedInAccount: action.payload,
				isLoggedIn: true,
				user: action.payload.firstName,
				expenses: action.payload.expenses,
				deposits: action.payload.deposits,
			};
		}

		case 'user/LoggedOut':
			return {
				...state,
				isLoggedIn: false,
				user: '',
				pin: '',
			};

		case 'add/expense':
			return {
				...state,
				expenses: action.payload,
			};

		case 'add/deposit':
			return {
				...state,
				deposits: action.payload,
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
	const [message, setMessage] = useState('this is a test');

	const totalIncome = +state.deposits?.reduce((acc, mov) => acc + mov[0], 0);
	const totalExpenses = +state.expenses?.reduce((acc, mov) => acc + mov[0], 0);

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
				message,
				setMessage,
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
