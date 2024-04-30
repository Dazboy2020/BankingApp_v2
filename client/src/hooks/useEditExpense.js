import { useAppContext } from '../context/context';
import axios from 'axios';
import { config } from './config';
import { useModalContext } from '../context/modalContext';

export default function useEditExpense() {
	const { state, dispatch } = useAppContext();

	const { setOpenToast, message, setMessage } = useModalContext();

	const authToken = localStorage.getItem('authToken');

	if (!authToken) return;

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
				`/editexpense/${userId}/${expenseId}`,
				expenseData,
				config
			);

			if (!response) return;

			dispatch({
				type: 'add/editedExpense',
				payload: { id: expenseData.id, expenseData },
			});

			setMessage('Expense edited successfully');
			setOpenToast(true, { message: message });

			console.log('Expense updated successfully:', response.data);
		} catch (error) {
			if (!error) return;
			const message = error.response.data.error;
			console.log(error.response.data.error);

			setMessage(message);
			setOpenToast(true, { message: message });

			// console.error('Error updating expense:', error);
		}
	};

	return { editExpense };
}
