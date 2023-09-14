import { createContext, useContext, useReducer, useState } from 'react';

const AppContext = createContext();

const inititalState = {
	expenses: [{}],
	deposits: [{}],
	isLoggedIn: false,
	loggedInAccount: '',
	pin: '',
	user: '',
	lastName: '',
	error: false,
	sort: false,
	message: '',
	_id: '',
	addTransactionAnimate: false,
	isActive: 0,
	isEditing: false,
	editingExpense: [{}],
	editingDeposit: [{}],
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
				lastName: action.payload.lastName,
				expenses: action.payload.expenses,
				deposits: action.payload.deposits,
				_id: action.payload._id,
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
				expenses: [action.payload, ...state.expenses],
			};

		case 'add/deposit':
			return {
				...state,
				deposits: [action.payload, ...state.deposits],
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

			return {
				...state,
				expenses: updatedExpenses,
				isEditing: false,
			};
		}
		case 'add/editedDeposit': {
			const updatedDeposits = state.deposits.map((deposit) => {
				if (deposit.id === action.payload.id) {
					// Replace the matching expense with the updated data
					return {
						...deposit,
						...action.payload.expenseData,
					};
				} else {
					return deposit;
				}
			});
			console.log(updatedDeposits);
			return {
				...state,
				deposits: updatedDeposits,
				isEditing: false,
			};
		}

		case 'delete/deposit':
			return {
				...state,
				deposits: state.deposits.filter((ex) => ex.id !== action.payload),
			};

		case 'delete/expense':
			return {
				...state,
				expenses: state.expenses.filter((ex) => ex.id !== action.payload),
			};

		case 'sort':
			return {
				...state,
				sort: state.sort === true ? false : true,
			};

		case 'addTransactionAnimate': {
			return {
				...state,
				addTransactionAnimate: action.payload,
			};
		}

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
