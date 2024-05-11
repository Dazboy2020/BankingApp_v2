import { useAppContext } from '../context/context';
import { useModalContext } from '../context/modalContext';
import { config } from './config';
import axios from 'axios';

import { getErrorMessage } from '../utils/errorUtils';

export default function useDeleteExpense(id) {
	const { state, dispatch } = useAppContext();

	const { setOpenToast, message, setMessage } = useModalContext();

	const authToken = localStorage.getItem('authToken');

	if (!authToken) return;

	const deleteExpense = async (id) => {
		let userId = state._id;
		console.log(userId, id);
		setMessage('');

		try {
			await axios.delete(`/deleteexpense/${userId}/${id}`, config);
			dispatch({ type: 'delete/expense', payload: id });
			setMessage('Expense item deleted!');
			setOpenToast(true, { message: message });

			console.log('Expense deleted successfully');
		} catch (error) {
			console.error('Error deleting expense:', error);
			const errorMessage = getErrorMessage(error);
			setMessage(errorMessage);
			setOpenToast(true, { message: errorMessage });
		}

		if (state.isEditing) dispatch({ type: 'edit/cancel' });
	};

	return { deleteExpense };
}
