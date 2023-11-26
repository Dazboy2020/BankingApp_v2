import { useAppContext } from '../context/context';
import axios from 'axios';
import { BASE_URL } from '../utils/BASE_URL';

export default function useDeleteExpense(id) {
	const { state, dispatch, setMessage, setOpenToast, message } =
		useAppContext();

	const deleteExpense = async (id) => {
		let userId = state._id;
		console.log(userId, id);
		setMessage('');

		try {
			await axios.delete(`${BASE_URL}/deleteexpense/${userId}/${id}`);
			console.log('Expense deleted successfully');
		} catch (error) {
			console.error('Error deleting expense:', error);
		}

		dispatch({ type: 'delete/expense', payload: id });
		if (state.isEditing) dispatch({ type: 'edit/cancel' });

		setMessage('Expense item deleted!');
		setOpenToast(true, { message: message });
	};

	return { deleteExpense };
}
