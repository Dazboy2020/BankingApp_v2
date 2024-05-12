import { useAppContext } from '../context/context';
import { useModalContext } from '../context/modalContext';
import useAsyncHandler from './useAsyncHandler';
import { config } from './config';
import axios from 'axios';

export default function useAddDeposit() {
	const { state, dispatch } = useAppContext();
	const { setOpenToast, setMessage } = useModalContext();
	const { asyncHandler } = useAsyncHandler();

	const authToken = localStorage.getItem('authToken');

	if (!authToken) return;

	const addDeposit = asyncHandler(
		async (expenseData, expenseAmount, expenseCategory, expenseDate) => {
			expenseData = {
				id: window.crypto.randomUUID(),
				amount: +expenseAmount,
				date: expenseDate,
				category: expenseCategory,
				_id: state._id,
			};

			const response = await axios.post('/add-deposit', expenseData, config);
			if (!response) return;

			const { message } = response.data;
			dispatch({ type: 'add/deposit', payload: expenseData });

			setMessage(message);
			setOpenToast(true, { message: message });
		}
	);

	return { addDeposit };
}
