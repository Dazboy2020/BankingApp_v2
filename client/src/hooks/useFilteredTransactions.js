import { useAppContext } from '../context/context';

export default function useFilteredTransactions(type) {
	const { state } = useAppContext();

	let transactions;

	if (type === 'expenses') {
		if (state.isActive === 0) {
			transactions = state.expenses;
		} else {
			if (state.isEditing) {
				transactions = state.editingExpense;
			} else {
				transactions =
					state.filteredExpenses?.length > 0
						? state.filteredExpenses
						: state.expenses;
			}
		}

		if (!transactions) {
			transactions = [];
		}
	}

	if (type === 'deposits') {
		if (state.isActive === 0) {
			transactions = state.deposits;
		} else {
			if (state.isEditing) {
				transactions = state.editingExpense;
			} else {
				transactions =
					state.filteredDeposits?.length > 0
						? state.filteredDeposits
						: state.deposits;
			}
		}

		if (!transactions) {
			transactions = [];
		}
	}

	return { transactions };
}
