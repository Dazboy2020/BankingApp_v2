import { useAppContext } from '../context/context';
import axios from 'axios';
import { config } from './config';
import { useModalContext } from '../context/modalContext';

export default function useDeleteDeposit(id) {
	const { state, dispatch } = useAppContext();

	const { setOpenToast, message, setMessage } = useModalContext();

	const authToken = localStorage.getItem('authToken');

	if (!authToken) return;

	const deleteDeposit = async (id) => {
		let userId = state._id;
		console.log(userId, id);

		try {
			await axios.delete(`/deletedeposit/${userId}/${id}`, config);
			dispatch({ type: 'delete/deposit', payload: id });
			setMessage('Deposit item deleted!');
			setOpenToast(true, { message: message });

			console.log('Deposit deleted successfully');
		} catch (error) {
			if (!error) return;
			const message = error.message;
			setMessage(message);
			setOpenToast(true, { message: message });

			console.error('Error deleting deposit:', error);
		}

		if (state.isEditing) dispatch({ type: 'edit/cancel' });
	};

	return { deleteDeposit };
}
