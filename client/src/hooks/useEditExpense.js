import { useAppContext } from '../context/context';
import { useModalContext } from '../context/modalContext';
import useAsyncHandler from './useAsyncHandler';
import { config } from './config';
import axios from 'axios';

export default function useEditExpense() {
	const { state, dispatch } = useAppContext();

	const { asyncHandler } = useAsyncHandler();

	const { setOpenToast, message, setMessage } = useModalContext();

	const authToken = localStorage.getItem('authToken');

	if (!authToken) return;

	const editExpense = asyncHandler(
		async (expenseAmount, expenseCategory, expenseData, formattedDate) => {
			expenseData = {
				id: state.editingExpense[0].id,
				amount: -expenseAmount,
				category: expenseCategory,
				date: formattedDate,
			};

			const userId = state._id;
			const expenseId = expenseData.id;

			const response = await axios.put(
				`/editexpense/${userId}/${expenseId}`,
				expenseData,
				config
			);

			if (!response) return;

			dispatch({
				type: 'add/editedExpense',
				payload: { id: expenseData.id, expenseData },
			});

			setMessage('Expense edited successfully');
			setOpenToast(true, { message: message });
		}
	);

	return { editExpense };
}
