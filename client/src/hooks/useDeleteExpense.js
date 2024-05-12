import { useAppContext } from '../context/context';
import { useModalContext } from '../context/modalContext';
import useAsyncHandler from './useAsyncHandler';
import { config } from './config';
import axios from 'axios';

export default function useDeleteExpense(id) {
	const { state, dispatch } = useAppContext();

	const { asyncHandler } = useAsyncHandler();

	const { setOpenToast, message, setMessage } = useModalContext();

	const authToken = localStorage.getItem('authToken');

	if (!authToken) return;

	const deleteExpense = asyncHandler(async (id) => {
		let userId = state._id;
		setMessage('');

		await axios.delete(`/deleteexpense/${userId}/${id}`, config);
		dispatch({ type: 'delete/expense', payload: id });
		setMessage('Expense item deleted!');
		setOpenToast(true, { message: message });

		if (state.isEditing) dispatch({ type: 'edit/cancel' });
	});

	return { deleteExpense };
}
