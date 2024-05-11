import {
	createContext,
	useContext,
	useMemo,
	useReducer,
	useState,
} from 'react';
import { sortArrayByDate } from '../utils/sortArray';
import { filterExpensesForCurrentMonth } from '../utils/BudgetHelper';
import dayjs from 'dayjs';

const formatDateToString = (date) => {
	return date ? dayjs(date).format('DD MMM YYYY') : ''; // Check if date is defined
};

const AppContext = createContext();

const inititalState = {
	expenses: [{}],
	deposits: [{}],
	combinedTransactions: [{}],
	budgetTransactions: [{}],
	budget: null,
	budgetCreation: null,
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
	filteredCombined: null,
	filteredBudget: null,
	isLoading: false,
};

function reducer(state, action) {
	let budgetTransactions;

	switch (action.type) {
		case 'field': {
			return {
				...state,
				[action.fieldName]: action.payload,
				error: false,
			};
		}
		//!Log in user
		case 'user/MongoLoggedIn': {
			const arrayOfExpenses = action.payload.user.expenses;
			const arrayOfDeposits = action.payload.user.deposits;
			const arrayOfCombinedTransactions = [
				...arrayOfExpenses,
				...arrayOfDeposits,
			];

			sortArrayByDate(arrayOfExpenses);
			sortArrayByDate(arrayOfDeposits);
			sortArrayByDate(arrayOfCombinedTransactions);

			budgetTransactions = filterExpensesForCurrentMonth(
				arrayOfCombinedTransactions
			);

			const budgetCreationDate = formatDateToString(
				action.payload.user.budget.date
			);

			return {
				...state,
				loggedInAccount: action.payload.user,
				isLoggedIn: true,

				username: action.payload.user.username,
				user: action.payload.user.username,

				expenses: arrayOfExpenses,
				deposits: arrayOfDeposits,
				combinedTransactions: arrayOfCombinedTransactions,
				_id: action.payload.user._id,
				filteredExpenses: null,
				isActive: 0,
				budget: action.payload.user.budget.amount || null,
				budgetCreation: budgetCreationDate,
				budgetTransactions: budgetTransactions,
			};
		}
		//!Log out user
		case 'user/LoggedOut':
			return {
				...inititalState,
				token: '',
			};
		//!Add token
		case 'user/addToken':
			return {
				...state,
				token: action.payload,
			};
		//!Add budget
		case 'user/AddBudget':
			return {
				...state,
				budget: action.payload,
				budgetTransactions: filterExpensesForCurrentMonth([
					...state.expenses,
					...state.deposits,
				]),
			};
		//!Delete budget
		case 'user/deleteBudget':
			return {
				...state,
				budget: null,
				budgetTransactions: [{}],
			};
		//!Add expense
		case 'add/expense':
			const sortedExpenses = [action.payload, ...state.expenses];
			sortArrayByDate(sortedExpenses);

			budgetTransactions = filterExpensesForCurrentMonth([
				...sortedExpenses,
				...state.deposits,
			]);

			return {
				...state,
				expenses: sortedExpenses,
				combinedTransactions: [...sortedExpenses, ...state.deposits],
				budgetTransactions,
			};
		//!Add deposit
		case 'add/deposit':
			const sortedDeposits = [action.payload, ...state.deposits];
			sortArrayByDate(sortedDeposits);

			budgetTransactions = filterExpensesForCurrentMonth([
				...sortedDeposits,
				...state.expenses,
			]);

			return {
				...state,
				deposits: sortedDeposits,
				combinedTransactions: [...sortedDeposits, ...state.expenses],
				budgetTransactions,
			};
		//! Enter edit mode: expense
		case 'edit/expense': {
			return {
				...state,
				isEditing: true,
				editingExpense: action.payload,
			};
		}
		//! Enter edit mode: deposit
		case 'edit/deposit': {
			return {
				...state,
				isEditing: true,
				editingDeposit: action.payload,
			};
		}
		//! Edit expense
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

			budgetTransactions = filterExpensesForCurrentMonth([
				...updatedExpenses,
				...state.deposits,
			]);

			return {
				...state,
				expenses: updatedExpenses,
				isEditing: false,
				combinedTransactions: [...updatedExpenses, ...state.deposits],
				budgetTransactions,
			};
		}
		//! Edit deposit
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

			budgetTransactions = filterExpensesForCurrentMonth([
				...updatedDeposits,
				...state.expenses,
			]);

			return {
				...state,
				deposits: updatedDeposits,
				isEditing: false,
				combinedTransactions: [...updatedDeposits, state.expenses],
				budgetTransactions,
			};
		}

		//!Delete deposit
		case 'delete/deposit':
			const updatedDeletedDeposits = state.deposits.filter(
				(ex) => ex.id !== action.payload
			);
			sortArrayByDate(updatedDeletedDeposits);

			budgetTransactions = filterExpensesForCurrentMonth([
				...updatedDeletedDeposits,
				...state.expenses,
			]);
			return {
				...state,
				deposits: updatedDeletedDeposits,
				filteredExpenses: null,
				combinedTransactions: [...updatedDeletedDeposits, ...state.expenses],
				budgetTransactions,
			};
		//!Delete expense
		case 'delete/expense':
			const updatedDeletedExpenses = state.expenses.filter(
				(ex) => ex.id !== action.payload
			);
			sortArrayByDate(updatedDeletedExpenses);

			budgetTransactions = filterExpensesForCurrentMonth([
				...updatedDeletedExpenses,
				...state.deposits,
			]);
			return {
				...state,
				expenses: updatedDeletedExpenses,
				filteredExpenses: null,
				combinedTransactions: [...updatedDeletedExpenses, ...state.deposits],
				budgetTransactions,
			};

		//!Sort
		case 'sort':
			return {
				...state,
				sort: state.sort === true ? false : true,
			};

		//! Add active class
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

		//!Is loading
		case 'isLoading': {
			return {
				...state,
				isLoading: action.payload,
			};
		}

		//! Edit cancel
		case 'edit/cancel': {
			return {
				...state,
				isEditing: false,
				editingExpense: '',
			};
		}

		//! Reset editing
		case 'reset/editing':
			return {
				...state,
				isEditing: false,
			};

		//! Filter expenses
		case 'user/filteredExpenses': {
			if (action.payload === 'All Expenses')
				return {
					...state,
					filtering: false,
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

		//! Filter deposits
		case 'user/filteredDeposits': {
			if (action.payload === 'All Deposits') {
				return {
					...state,
					filtering: false,
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

		//! Filter combined
		case 'user/filteredCombined': {
			if (action.payload === 'All Transactions') {
				return {
					...state,
					filtering: false,
					filteredCombined: state.combinedTransactions,
				};
			}
			return {
				...state,
				filtering: true,
				filteredCombined: state.combinedTransactions.filter(
					(transaction) => transaction.category === action.payload
				),
			};
		}

		//! Filter budget
		case 'user/filteredBudget':
			let filteredBudgetTransactons = state.budgetTransactions;

			if (action.payload === 'All Transactions') {
				return {
					...state,
					filtering: false,
					filteredBudget: filteredBudgetTransactons.filter(
						(transaction) => transaction.category === action.payload
					),
				};
			}

			return {
				...state,
				filtering: true,
				filteredBudget: filteredBudgetTransactons.filter(
					(transaction) => transaction.category === action.payload
				),
			};

		default:
			return state;
	}
}

function ContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, inititalState);
	const [isPieExpanded, setisPieExpanded] = useState(true);
	const [isSummaryExpanded, setIsSummaryExpanded] = useState(true);

	const [id, setId] = useState('');
	const [navLink, setNavLink] = useState(0);

	const totalIncome = useMemo(
		() => +state.deposits?.reduce((acc, dep) => acc + dep.amount, 0),
		[state.deposits]
	);

	const totalExpenses = useMemo(
		() => +state.expenses?.reduce((acc, ex) => acc + ex.amount, 0),
		[state.expenses]
	);

	const totalBudgetExpenses = useMemo(() => {
		if (state.budgetTransactions) {
			return state.budgetTransactions
				.filter((obj) => obj.amount < 0)
				.reduce((accumulator, obj) => accumulator + obj.amount, 0);
		}
		return 0;
	}, [state.budgetTransactions]);

	const totalBudgetDeposits = useMemo(() => {
		if (state.budgetTransactions) {
			return state.budgetTransactions
				.filter((obj) => obj.amount > 0)
				.reduce((accumulator, obj) => accumulator + obj.amount, 0);
		}
		return 0;
	}, [state.budgetTransactions]);

	return (
		<AppContext.Provider
			value={{
				dispatch,
				state,
				totalIncome,
				totalExpenses,

				id,
				setId,

				navLink,
				setNavLink,

				totalBudgetDeposits,
				totalBudgetExpenses,

				isPieExpanded,
				setisPieExpanded,
				isSummaryExpanded,
				setIsSummaryExpanded,
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
