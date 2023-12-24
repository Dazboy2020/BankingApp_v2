import { createContext, useContext, useReducer, useState } from 'react';
import { sortArrayByDate } from '../utils/sortArray';

const AppContext = createContext();

const inititalState = {
	expenses: [{}],
	deposits: [{}],
	token: '',
	isLoggedIn: false,
	loggedInAccount: '',
	username: '',
	lastName: '',
	error: false,
	sort: false,
	message: '',
	_id: '',
	isActive: 0,
	isEditing: false,
	editingExpense: [{}],
	editingDeposit: [{}],
	filteredExpenses: null,
	filteredDeposits: null,
	isLoading: false,
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
			const arrayOfExpenses = action.payload.user.expenses;
			const arrayOfDeposits = action.payload.user.deposits;

			console.log(arrayOfExpenses);

			sortArrayByDate(arrayOfExpenses);
			sortArrayByDate(arrayOfDeposits);

			return {
				...state,
				loggedInAccount: action.payload.user,
				isLoggedIn: true,

				username: action.payload.user.username,
				user: action.payload.user.username,
				token: action.payload.token,

				expenses: arrayOfExpenses,
				deposits: arrayOfDeposits,
				_id: action.payload.user._id,
				filteredExpenses: null,
				isActive: 0,
			};
		}

		case 'user/LoggedOut':
			return {
				...state,
				isLoggedIn: false,
				user: '',
				filteredExpenses: null,
				token: '',
			};

		case 'add/expense':
			const sortedExpenses = [action.payload, ...state.expenses];

			sortArrayByDate(sortedExpenses);
			return {
				...state,
				expenses: sortedExpenses,
			};

		case 'add/deposit':
			const sortedDeposits = [action.payload, ...state.deposits];
			sortArrayByDate(sortedDeposits);

			return {
				...state,
				deposits: sortedDeposits,
			};

		case 'edit/expense': {
			return {
				...state,
				isEditing: true,
				editingExpense: action.payload,
			};
		}

		case 'edit/deposit': {
			return {
				...state,
				isEditing: true,
				editingDeposit: action.payload,
			};
		}

		case 'add/editedExpense': {
			const updatedExpenses = state.expenses.map((expense) => {
				if (expense.id === action.payload.id) {
					// Replace the matching expense with the updated data
					return {
						...expense,
						...action.payload.expenseData,
					};
				} else {
					return expense;
				}
			});

			sortArrayByDate(updatedExpenses);

			return {
				...state,
				expenses: updatedExpenses,
				isEditing: false,
			};
		}

		case 'add/editedDeposit': {
			const updatedDeposits = state.deposits.map((deposit) => {
				if (deposit.id === action.payload.id) {
					return {
						...deposit,
						...action.payload.expenseData,
					};
				} else {
					return deposit;
				}
			});

			sortArrayByDate(updatedDeposits);

			return {
				...state,
				deposits: updatedDeposits,
				isEditing: false,
				filteredExpenses: null,
			};
		}

		case 'delete/deposit':
			return {
				...state,
				deposits: state.deposits.filter((ex) => ex.id !== action.payload),
				filteredExpenses: null,
			};

		case 'delete/expense':
			return {
				...state,
				expenses: state.expenses.filter((ex) => ex.id !== action.payload),
				filteredExpenses: null,
			};

		case 'sort':
			return {
				...state,
				sort: state.sort === true ? false : true,
			};

		case 'addActiveClass': {
			if (action.payload === 0) {
				return {
					...state,
					isEditing: false,
					isActive: action.payload,
				};
			}

			return {
				...state,
				isActive: action.payload,
			};
		}

		case 'isLoading': {
			return {
				...state,
				isLoading: action.payload,
			};
		}

		case 'edit/cancel': {
			return {
				...state,
				isEditing: false,
				editingExpense: '',
			};
		}

		case 'reset/editing':
			return {
				...state,
				isEditing: false,
			};

		case 'user/filteredExpenses': {
			if (action.payload === 'All Expenses')
				return {
					...state,
					filteredExpenses: state.expenses,
				};

			return {
				...state,
				filtering: true,
				filteredExpenses: state.expenses.filter(
					(ex) => ex.category === action.payload
				),
			};
		}
		case 'user/filteredDeposits': {
			if (action.payload === 'All Deposits') {
				return {
					...state,
					filteredDeposits: state.deposits,
				};
			}
			return {
				...state,
				filtering: true,
				filteredDeposits: state.deposits.filter(
					(ex) => ex.category === action.payload
				),
			};
		}

		default:
			return state;
	}
}

function ContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, inititalState);

	const [open, setOpen] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [openToast, setOpenToast] = useState(false);

	const [message, setMessage] = useState('');

	const [modalTitle, setModalTitle] = useState('');
	const [modalMessage, setModalMessage] = useState('');
	const [modalAction, setModalAction] = useState('');
	const [id, setId] = useState('');
	const [navLink, setNavLink] = useState(0);

	const totalIncome = +state.deposits?.reduce(
		(acc, dep) => acc + dep.amount,
		0
	);
	const totalExpenses = +state.expenses?.reduce(
		(acc, ex) => acc + ex.amount,
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

				dispatch,
				state,
				message,
				setMessage,

				modalTitle,
				setModalTitle,
				modalMessage,
				setModalMessage,
				modalAction,
				setModalAction,
				id,
				setId,

				navLink,
				setNavLink,
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
