import { useAppContext } from '../context/context';
import axios from 'axios';
import { config } from './config';
import { useModalContext } from '../context/modalContext';

export default function useAddDeposit() {
	const { state, dispatch } = useAppContext();
	const { setOpenToast, setMessage } = useModalContext();

	const authToken = localStorage.getItem('authToken');

	if (!authToken) return;

	const addDeposit = async (
		expenseData,
		expenseAmount,
		expenseCategory,
		expenseDate
	) => {
		expenseData = {
			id: window.crypto.randomUUID(),
			amount: +expenseAmount,
			date: expenseDate,
			category: expenseCategory,
			_id: state._id,
		};

		try {
			const response = await axios.post('/add-deposit', expenseData, config);
			if (!response) return;

			const { message } = response.data;
			dispatch({ type: 'add/deposit', payload: expenseData });

			setMessage(message);
			setOpenToast(true, { message: message });

			console.log('Deposit added successfully:', response.data);
		} catch (error) {
			if (!error) return;
			const message = error.message;
			setMessage(message);
			setOpenToast(true, { message: message });

			console.error('Error adding expense:', error);
		}
	};

	return { addDeposit };
}
