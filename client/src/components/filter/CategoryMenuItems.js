import { useAppContext } from '../../context/context';
import { MenuItem } from '@mui/material';

function CategoryMenuItems({ handleClose, expenseType }) {
	const { state } = useAppContext();

	const expenseLabelsInitial = state.expenses
		.filter((expense) => expense.category)
		.map((ex) => ex.category);

	expenseLabelsInitial.unshift('All Expenses');

	const depositLabelInitial = state.deposits
		.filter((deposit) => deposit.category)
		.map((dep) => dep.category);

	depositLabelInitial.unshift('All Deposits');

	const combinedLabelsInitial = state.combinedTransactions
		.filter((transaction) => transaction.category)
		.map((item) => item.category);

	combinedLabelsInitial.unshift('All transactions');

	const budgetLabelsInitial = state.budgetTransactions
		.filter((transaction) => transaction.category)
		.map((item) => item.category);

	budgetLabelsInitial.unshift('All Budget Items');

	const expenseLabels = [...new Set(expenseLabelsInitial)];
	const depositLabels = [...new Set(depositLabelInitial)];
	const combinedLabels = [...new Set(combinedLabelsInitial)];
	const budgetLabels = [...new Set(budgetLabelsInitial)];

	if (expenseType === 'expense') {
		return expenseLabels.map((option) => (
			<MenuItem
				value={option}
				key={option}
				onClick={(e) => handleClose(e, option)}
			>
				{option}
			</MenuItem>
		));
	}

	if (expenseType === 'deposit') {
		return depositLabels.map((option) => (
			<MenuItem
				value={option}
				key={option}
				onClick={(e) => handleClose(e, option)}
			>
				{option}
			</MenuItem>
		));
	}

	if (expenseType === 'All Transactions')
		return combinedLabels.map((option) => (
			<MenuItem
				value={option}
				key={option}
				onClick={(e) => handleClose(e, option)}
			>
				{option}
			</MenuItem>
		));

	if (expenseType === 'budget')
		return budgetLabels.map((option) => (
			<MenuItem
				value={option}
				key={option}
				onClick={(e) => handleClose(e, option)}
			>
				{option}
			</MenuItem>
		));
}

export default CategoryMenuItems;
