import { useAppContext } from '../context/context';
import axios from 'axios';
import { BASE_URL } from '../utils/BASE_URL';

export default function useAddExpense() {
	const { state, dispatch } = useAppContext();

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
			const response = await axios.post(`${BASE_URL}/addexpense`, expenseData);

			console.log('New expense added successfully:', response.data);
		} catch (error) {
			console.error('Error adding expense:', error);
		}
		dispatch({ type: 'add/expense', payload: expenseData });
	};

	return { addExpense };
}
