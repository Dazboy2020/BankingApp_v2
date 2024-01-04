import { useAppContext } from '../context/context';

export default function useFilteredTransactions(type) {
	const { state } = useAppContext();

	let transactions;

	if (type === 'expenses') {
		transactions = state.expenses;
		if (state.isEditing) {
			transactions = state.editingExpense;
		} else {
			transactions =
				state.filteredExpenses?.length > 0
					? state.filteredExpenses
					: state.expenses;
		}

		if (!transactions) {
			transactions = [];
		}
	}

	if (type === 'deposits') {
		transactions = state.deposits;
		if (state.isEditing) {
			transactions = state.editingDeposit;
		} else {
			transactions =
				state.filteredDeposits?.length > 0
					? state.filteredDeposits
					: state.deposits;
		}

		if (!transactions) {
			transactions = [];
		}
	}

	if (type === 'combined') {
		transactions =
			state.filteredCombined?.length > 0
				? state.filteredCombined
				: state.combinedTransactions;
	}

	if (type === 'budget') {
		transactions = state.budgetTransactions;
	}

	return { transactions, type };
}
