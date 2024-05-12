import { useAppContext } from '../context/context';
import { useModalContext } from '../context/modalContext';
import useAsyncHandler from './useAsyncHandler';
import { config } from './config';
import axios from 'axios';

export default function useDeleteDeposit(id) {
	const { state, dispatch } = useAppContext();
	const { asyncHandler } = useAsyncHandler();

	const { setOpenToast, message, setMessage } = useModalContext();

	const authToken = localStorage.getItem('authToken');

	if (!authToken) return;

	const deleteDeposit = asyncHandler(async (id) => {
		let userId = state._id;

		await axios.delete(`/deletedeposit/${userId}/${id}`, config);
		dispatch({ type: 'delete/deposit', payload: id });
		setMessage('Deposit item deleted!');
		setOpenToast(true, { message: message });

		if (state.isEditing) dispatch({ type: 'edit/cancel' });
	});

	return { deleteDeposit };
}
