import { useAppContext } from '../context/context';
import axios from 'axios';
import { BASE_URL } from '../utils/BASE_URL';
import { config } from './config';

export default function useEditDeposit() {
	const { state, dispatch, setMessage, message, setOpenToast } =
		useAppContext();

	const authToken = localStorage.getItem('authToken');

	if (!authToken) return;

	const editDeposit = async (
		expenseData,
		expenseAmount,
		expenseCategory,
		formattedDate
	) => {
		expenseData = {
			id: state.editingDeposit[0].id,
			amount: +expenseAmount,
			category: expenseCategory,
			date: formattedDate,
		};

		const userId = state._id;
		const expenseId = expenseData.id;

		try {
			const response = await axios.put(
				`${BASE_URL}/editdeposit/${userId}/${expenseId}`,
				expenseData,
				config
			);

			if (!response) return;
			dispatch({
				type: 'add/editedDeposit',
				payload: { id: expenseData.id, expenseData },
			});

			setMessage('Deposit edited successfully');
			setOpenToast(true, { message: message });

			console.log('Expense updated successfully:', response.data);
		} catch (error) {
			if (!error) return;
			const message = error.message;
			setMessage(message);
			setOpenToast(true, { message: message });
			console.error('Error updating expense:', error);
		}
	};

	return { editDeposit };
}
