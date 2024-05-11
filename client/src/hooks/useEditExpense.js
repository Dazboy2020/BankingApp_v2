import { useAppContext } from '../context/context';
import { useModalContext } from '../context/modalContext';
import { config } from './config';
import axios from 'axios';

import { getErrorMessage } from '../utils/errorUtils';

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
			const errorMessage = getErrorMessage(error);
			setMessage(errorMessage);
			setOpenToast(true, { message: errorMessage });
		}
	};

	return { editExpense };
}
