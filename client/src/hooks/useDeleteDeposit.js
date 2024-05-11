import { useAppContext } from '../context/context';
import { useModalContext } from '../context/modalContext';
import { config } from './config';
import axios from 'axios';
import { getErrorMessage } from '../utils/errorUtils';

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
			const errorMessage = getErrorMessage(error);
			setMessage(errorMessage);
			setOpenToast(true, { message: errorMessage });
		}

		if (state.isEditing) dispatch({ type: 'edit/cancel' });
	};

	return { deleteDeposit };
}
