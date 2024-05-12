import { useModalContext } from '../context/modalContext';
import { useAppContext } from '../context/context';
import axios from 'axios';
import { config } from './config';
import useAsyncHandler from './useAsyncHandler';

export default function useAddExpense() {
	const { state, dispatch } = useAppContext();
	const { setOpenToast, setMessage } = useModalContext();

	const { asyncHandler } = useAsyncHandler();

	const authToken = localStorage.getItem('authToken');

	if (!authToken) return;

	const addExpense = asyncHandler(
		async (expenseData, expenseAmount, expenseDate, expenseCategory) => {
			expenseData = {
				id: window.crypto.randomUUID(),
				amount: -expenseAmount,
				date: expenseDate,
				category: expenseCategory,
				_id: state._id,
			};

			const response = await axios.post('/addexpense', expenseData, config);
			if (!response) return;

			const { message } = response.data;
			dispatch({ type: 'add/expense', payload: expenseData });

			setMessage(message);
			setOpenToast(true, { message: message });
		}
	);

	return { addExpense };
}
