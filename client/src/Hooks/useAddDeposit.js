import { useAppContext } from '../context/context';
import axios from 'axios';

export default function useAddDeposit() {
	const { state, dispatch } = useAppContext();

	const addDeposit = async (
		expenseData,
		expenseAmount,
		expenseCategory,
		expenseDate
	) => {
		const BASE_URL = 'http://localhost:5000';

		const queryParams = `?_id=${state._id}`;

		expenseData = {
			id: window.crypto.randomUUID(),
			amount: +expenseAmount,
			date: expenseDate,
			category: expenseCategory,
		};

		try {
			const response = await axios.post(
				`${BASE_URL}/adddeposit${queryParams}`,
				expenseData
			);

			console.log('Deposit added successfully:', response.data);
		} catch (error) {
			console.error('Error adding expense:', error);
		}

		dispatch({ type: 'add/deposit', payload: expenseData });
	};

	return { addDeposit };
}
