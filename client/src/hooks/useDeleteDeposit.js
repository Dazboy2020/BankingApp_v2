import { useAppContext } from '../context/context';
import axios from 'axios';
import { BASE_URL } from '../utils/BASE_URL';

export default function useDeleteDeposit(id) {
	const { state, dispatch, setMessage, message, setOpenToast } =
		useAppContext();

	const deleteDeposit = async (id) => {
		let userId = state._id;
		console.log(userId, id);

		try {
			await axios.delete(`${BASE_URL}/deletedeposit/${userId}/${id}`);
			console.log('Deposit deleted successfully');
		} catch (error) {
			console.error('Error deleting deposit:', error);
		}

		dispatch({ type: 'delete/deposit', payload: id });
		if (state.isEditing) dispatch({ type: 'edit/cancel' });

		setMessage('Deposit item deleted!');
		setOpenToast(true, { message: message });
	};

	return { deleteDeposit };
}