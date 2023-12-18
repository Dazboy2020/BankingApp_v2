import { useAppContext } from '../context/context';
import axios from 'axios';
// import { BASE_URL } from '../utils/BASE_URL';
import { config } from './config';

export default function useAddExpense() {
	const { state, dispatch, setMessage, setOpenToast } = useAppContext();

	const authToken = localStorage.getItem('authToken');

	if (!authToken) return;

	const addExpense = async (
		expenseData,
		expenseAmount,
		expenseDate,
		expenseCategory
	) => {
		expenseData = {
			id: window.crypto.randomUUID(),
			amount: -expenseAmount,
			date: expenseDate,
			category: expenseCategory,
			_id: state._id,
		};

		try {
			const response = await axios.post('/addexpense', expenseData, config);
			if (!response) return;

			const { message } = response.data;
			dispatch({ type: 'add/expense', payload: expenseData });

			setMessage(message);
			setOpenToast(true, { message: message });

			console.log('New expense added successfully:', response.data);
		} catch (error) {
			if (!error) return;
			const message = error.message;
			setMessage(message);
			setOpenToast(true, { message: message });

			console.error('Error adding expense:', error);
		}
	};

	return { addExpense };
}
