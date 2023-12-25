import { useAppContext } from '../context/context';
import axios from 'axios';
import { config } from './config';
import { useModalContext } from '../context/modalContext';

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
			if (!error) return;
			const message = error.message;
			setMessage(message);
			setOpenToast(true, { message: message });
		}

		if (state.isEditing) dispatch({ type: 'edit/cancel' });
	};

	return { deleteExpense };
}
