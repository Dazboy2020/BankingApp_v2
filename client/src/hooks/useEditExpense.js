import { useAppContext } from '../context/context';
import axios from 'axios';
import { BASE_URL } from '../utils/BASE_URL';

export default function useEditExpense() {
	const { state, dispatch } = useAppContext();

	const editExpense = async (
		expenseAmount,
		expenseCategory,
		expenseData,
		formattedDate
	) => {
		expenseData = {
			id: state.editingExpense[0].id,
			amount: -expenseAmount,
			category: expenseCategory,
			date: formattedDate,
		};

		const userId = state._id;
		const expenseId = expenseData.id;

		try {
			const response = await axios.put(
				`${BASE_URL}/editexpense/${userId}/${expenseId}`,
				expenseData
			);
			console.log('Expense updated successfully:', response.data);
		} catch (error) {
			console.error('Error updating expense:', error);
		}

		dispatch({
			type: 'add/editedExpense',
			payload: { id: expenseData.id, expenseData },
		});
	};

	return { editExpense };
}
