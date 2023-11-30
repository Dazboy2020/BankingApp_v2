import { useAppContext } from '../context/context';
import axios from 'axios';
import { BASE_URL } from '../utils/BASE_URL';

export default function useAddDeposit() {
	const { state, dispatch, setMessage, setOpenToast } = useAppContext();

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
			const response = await axios.post(`${BASE_URL}/add-deposit`, expenseData);
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
