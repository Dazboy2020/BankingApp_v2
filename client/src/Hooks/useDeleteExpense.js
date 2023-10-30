import { useAppContext } from '../context/context';
import axios from 'axios';

export default function useDeleteExpense(id) {
	const { state, dispatch, setMessage, setOpenToast, message } =
		useAppContext();

	const deleteExpense = async (id) => {
		const BASE_URL = 'http://localhost:5000';

		let userId = state._id;
		console.log(userId, id);
		setMessage('');

		try {
			await axios.delete(`${BASE_URL}/deleteexpense/${userId}/${id}`);
			console.log('Expense deleted successfully');
		} catch (error) {
			console.error('Error deleting expense:', error);
		}

		dispatch({ type: 'addTransactionAnimate', payload: true });
		dispatch({ type: 'delete/expense', payload: id });

		setMessage('Expense item deleted!');
		setOpenToast(true, { message: message });
	};

	return { deleteExpense };
}
