import { useAppContext } from '../context/context';
import { useModalContext } from '../context/modalContext';
import useAsyncHandler from './useAsyncHandler';
import { config } from './config';
import axios from 'axios';

export default function useEditDeposit() {
	const { state, dispatch } = useAppContext();

	const { asyncHandler } = useAsyncHandler();

	const { setOpenToast, message, setMessage } = useModalContext();

	const authToken = localStorage.getItem('authToken');

	if (!authToken) return;

	const editDeposit = asyncHandler(
		async (expenseData, expenseAmount, expenseCategory, formattedDate) => {
			expenseData = {
				id: state.editingDeposit[0].id,
				amount: +expenseAmount,
				category: expenseCategory,
				date: formattedDate,
			};

			const userId = state._id;
			const expenseId = expenseData.id;

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
		}
	);

	return { editDeposit };
}
