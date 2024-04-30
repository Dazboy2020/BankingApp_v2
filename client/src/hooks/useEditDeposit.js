import { useAppContext } from '../context/context';
import axios from 'axios';
import { config } from './config';
import { useModalContext } from '../context/modalContext';

export default function useEditDeposit() {
	const { state, dispatch } = useAppContext();

	const { setOpenToast, message, setMessage } = useModalContext();

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
				`/editdeposit/${userId}/${expenseId}`,
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
			const message = error.response.data.error;

			setMessage(message);
			setOpenToast(true, { message: message });
			// console.error('Error updating expense:', error);
		}
	};

	return { editDeposit };
}
